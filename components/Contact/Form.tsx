'use client';

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
//import { Send } from 'lucide-react';

const inputFields = [
  { id: 'fullName', type: 'text', placeholder: 'Nome e cognome', required: true },
  { id: 'email', type: 'email', placeholder: 'Email', required: true },
  { id: 'phone', type: 'tel', placeholder: 'Telefono', required: false},
  { id: 'subject', type: 'text', placeholder: 'Oggetto', required: true },
];

interface FormProps {
  className?: string;  
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const turnstileToken = formData.get('cf-turnstile-response');

  if (!turnstileToken) {
    alert('Completa la verifica anti-bot.');
    return;
  }

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      turnstileToken,
      website: formData.get('website'),
    }),
  });

  if (response.ok) {
    alert('Messaggio inviato!');
    form.reset();
  } else {
    alert("Errore durante l'invio del messaggio.");
  }
};

export default function ContactForm({className}: FormProps) {
  return (
    <div className={`${className}`}>

      <h2 className="mb-2 text-xl sm:text-2xl font-bold uppercase tracking-wide text-gradient-orange">
        invia un messaggio
      </h2>


       <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      {/* Form */}
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          {inputFields.map(({ id, type, placeholder, required }) => (
            <div key={id}>
              <input name={id} type={type} required={required} placeholder={`${placeholder}${required ? " *" : ""}`} className="input-base" />
            </div>
          ))}

          <div>
            <textarea name="message" placeholder="Messaggio *" rows={4} className="input-base textarea-scrollbar" required />
          </div>
        </div>

        {/* Honeypot */}
        <input type="text" name="website" autoComplete="off" className="absolute left-[-9999px]" tabIndex={-1}/>

        {/* Turnstile */}
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        />

        {/* Note Privacy Policy */}
        <p className="text-xs leading-relaxed text-light-gray-text sm:text-sm">
          I tuoi dati saranno trattati in conformità con la nostra{' '}
          <Link href="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>
        </p>
        
        {/* Checkbox Accettazione */}
        <label className="group flex items-center gap-3 cursor-pointer">
          <input type="checkbox" required className="size-4 sm:size-5 accent-orange-gradient-start cursor-pointer"/>
          <span className="text-xs sm:text-sm text-light-gray-text group-hover:text-foreground transition-colors">
            Ho letto e accetto la Privacy Policy
          </span>
        </label>

        {/* Button Invia Messaggio */}
        <button type="submit" className="flex items-center justify-center gap-2 
                                         py-2 sm:py-3
                                         rounded-lg bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end
                                         text-black font-bold text-base sm:text-lg
                                         hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
        >
          <span>Invia messaggio</span>

          <Image
            src="/arrow-contact.svg"
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            />
          
        </button>
      </form>
    </div>
  );
}