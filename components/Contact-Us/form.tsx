'use client';

import Image from "next/image";

const INPUT_FIELDS = [
  { id: 'fullName', type: 'text', placeholder: 'Nome e cognome *' },
  { id: 'email', type: 'email', placeholder: 'Email *' },
  { id: 'subject', type: 'text', placeholder: 'Oggetto *' },
  { id: 'phone', type: 'tel', placeholder: 'Telefono *' },
];

const inputBaseStyles = `
  w-full h-11 md:h-12 px-4 rounded-xl
  bg-panel-background/34 border-2 border-stroke-primary
  text-foreground text-sm md:text-base font-medium
  placeholder:text-foreground/70
  focus:outline-none focus:border-orange-gradient-start
  transition-colors
`;

export default function ContactForm() {
  return (
    <div className="w-full max-w-xl flex flex-col gap-5 text-foreground">
      {/* Titolo */}
      <h2 className="text-xl md:text-2xl 
                     font-bold uppercase tracking-wide
                     bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent ">
        INVIA UN MESSAGGIO
      </h2>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3.5">
          {/* Mappatura degli input singoli */}
          {INPUT_FIELDS.map(({ id, type, placeholder }) => (
            <div key={id} className="w-full">
              <label htmlFor={id} className="sr-only">
                {placeholder.replace(' *', '')}
              </label>
              <input
                id={id}
                type={type}
                required
                placeholder={placeholder}
                className={inputBaseStyles}
              />
            </div>
          ))}

          {/* Area Messaggio */}
          <div className="w-full">
            <label htmlFor="message" className="sr-only">
              Messaggio
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Messaggio *"
              className={`${inputBaseStyles} h-auto min-h-[120px] md:min-h-[150px] p-4 resize-none`}
            />
          </div>
        </div>

        {/* Note Privacy Policy */}
        <p className="text-xs md:text-sm text-light-gray-text leading-relaxed">
          I tuoi dati saranno trattati in conformità con la nostra{' '}
          <a href="/privacy-policy" className="text-[#2676ff] hover:underline">
            Privacy Policy
          </a>
        </p>

        {/* Checkbox Accettazione */}
        <label htmlFor="privacy-consent" className="group
                                                    flex items-center 
                                                    gap-3 
                                                    cursor-pointer select-none"
                                                    >
          <input
            id="privacy-consent"
            type="checkbox"
            required
            className="w-4 h-4 md:w-5 md:h-5 shrink-0 
                       rounded bg-panel-background/34 border-2 border-light-gray-text/64 
                       accent-orange-gradient-start cursor-pointer"
          />
          <span className="text-xs md:text-sm 
                           text-light-gray-text 
                           group-hover:text-foreground transition-colors"
                           >
            Ho letto e accetto la Privacy Policy *
          </span>
        </label>

        {/* Button Invia Messaggio */}
        <button
          type="submit"
          className="w-full h-11 md:h-12 
                     flex items-center justify-center gap-2.5
                     rounded-lg bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end shadow-md
                     text-black font-bold text-base md:text-lg
                     hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
        >
          <span>Invia messaggio</span>

          <Image
            src={"/arrow-conct.svg"}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="arrow"
            />
          
        </button>
      </form>
    </div>
  );
}