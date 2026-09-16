import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
    value.replaceAll('&', '&amp;')
         .replaceAll('<', '&lt;')
         .replaceAll('>', '&gt;')
         .replaceAll('"', '&quot;')
         .replaceAll("'", '&#039;');


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, email, phone, subject, message, turnstileToken, website} = body;

    if (website) {
      return Response.json({ success: true });
    }

    if (!turnstileToken) {
      return Response.json(
        { error: 'Verifica anti-bot mancante' },
        { status: 400 }
      );
    }

    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
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

    if (!fullName || !email || !subject || !message) {
      return Response.json(
        { error: 'Compila tutti i campi obbligatori' },
        { status: 400 }
      );
    }

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Non specificato');
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: 'Contattaci <contattaci@vetrastudio.org>',
      to: ['help@vetrastudio.org'],
      replyTo: email,
      subject: subject,
      html: `
        <h2>Nuovo messaggio dal sito</h2>

        <p><strong>Nome:</strong> ${safeFullName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Telefono:</strong> ${safePhone}</p>
        <p><strong>Oggetto:</strong> ${safeSubject}</p>

        <p><strong>Messaggio:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch {
    return Response.json(
      { error: "Errore durante l'elaborazione della richiesta" },
      { status: 500 }
    );
  }

}