import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
    value.replaceAll('&', '&amp;')
         .replaceAll('<', '&lt;')
         .replaceAll('>', '&gt;')
         .replaceAll('"', '&quot;')
         .replaceAll("'", '&#039;');


export async function POST(request: Request) {
  const body = await request.json();

  const { fullName, email, phone, subject, message } = body;

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
}