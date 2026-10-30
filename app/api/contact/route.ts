import { Resend } from 'resend';

const LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 30,
  subject: 150,
  message: 5000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
    value.replaceAll('&', '&amp;')
         .replaceAll('<', '&lt;')
         .replaceAll('>', '&gt;')
         .replaceAll('"', '&quot;')
         .replaceAll("'", '&#039;');

// Returns a trimmed string
const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (typeof parsed !== 'object' || parsed === null) throw new Error();
    body = parsed;
  } catch {
    return Response.json({ error: 'Richiesta non valida' }, { status: 400 });
  }

  // Honeypot: bots fill it in, so we pretend everything went fine
  if (body.website) {
    return Response.json({ success: true });
  }
  
  const firstName = clean(body.firstName, LIMITS.firstName);
  const lastName = clean(body.lastName, LIMITS.lastName);
  const email = clean(body.email, LIMITS.email);
  const phone = clean(body.phone, LIMITS.phone) || 'Non specificato';
  const subject = clean(body.subject, LIMITS.subject).replace(/[\r\n]+/g, ' ');
  const message = clean(body.message, LIMITS.message);
  const turnstileToken =
    typeof body.turnstileToken === 'string' ? body.turnstileToken : '';

  // Validate before Turnstile so a typo doesn't burn the single-use token
  if (!firstName || !lastName || !email || !subject || !message) {
    return Response.json(
      { error: 'Compila tutti i campi obbligatori' },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: 'Email non valida' }, { status: 400 });
  }

  if (!turnstileToken) {
    return Response.json(
      { error: 'Verifica anti-bot mancante' },
      { status: 400 }
    );
  }
  
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return Response.json({ error: "Errore durante l'invio" }, { status: 500 });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) {
    console.error('TURNSTILE_SECRET_KEY is not set');
    return Response.json({ error: "Errore durante l'invio" }, { status: 500 });
  }

  try {
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      return Response.json(
        { error: 'Verifica anti-bot fallita' },
        { status: 403 }
      );
    }

    
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Contattaci <contattaci@vetrastudio.org>',
      to: ['help@vetrastudio.org'],
      replyTo: email,
      subject: subject,
      html: `
        <h2>Nuovo messaggio dal sito</h2>

        <p><strong>Nome:</strong> ${escapeHtml(firstName)}</p>
        <p><strong>Cognome:</strong> ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Oggetto:</strong> ${escapeHtml(subject)}</p>

        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: "Errore durante l'invio del messaggio" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: "Errore durante l'elaborazione della richiesta" },
      { status: 500 }
    );
  }

}