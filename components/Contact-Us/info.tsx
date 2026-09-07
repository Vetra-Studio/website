import Image from 'next/image';

const CONTACT_ITEMS = [
  {
    id: 'phone',
    title: 'Telefono',
    details: ['+39 111 1111111'],
    icon: '/phone-contact.svg',
    alt: 'Icona Telefono',
  },
  {
    id: 'email',
    title: 'Email',
    details: ['info@stay-tuned.it', 'Rispondiamo entro 24h'],
    icon: '/email-contact.svg',
    alt: 'Icona Email',
  },
  {
    id: 'hours',
    title: 'Orari',
    details: ['Lunedì - Venerdì: 15:00 - 21:00'],
    icon: '/clock.svg',
    alt: 'Icona Orari',
  },
];

export default function ContactInfo() {
  return (
    <div className="w-full max-w-xl flex flex-col items-start text-left gap-6 pt-0">
      <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent uppercase tracking-wide">
        INVIA UN MESSAGGIO
      </h2>

      {/* Schede Contatto */}
      <div className="flex flex-col gap-4 w-full">
        {CONTACT_ITEMS.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 md:p-5 rounded-2xl bg-panel-dark/35 border-2 border-stroke-primary flex items-center gap-4 md:gap-5 transition-colors hover:border-orange-start/50"
          >
            {/* Box Icona SVG */}
            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative">
              <Image
                src={item.icon}
                alt={item.alt}
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Testi */}
            <div className="flex flex-col gap-0.5 flex-1 min-w-0 text-left">
              <h3 className="text-lg md:text-xl font-semibold text-fg-light">
                {item.title}
              </h3>
              {item.details.map((line, idx) => (
                <p key={idx} className="text-sm md:text-base text-gray-light leading-snug">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}