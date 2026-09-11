import Image from "next/image";

import ContactForm from "@/components/Contact-Us/form";


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





export default function Information() {
  return (
    <div className="w-full 
                    flex flex-col 
                    gap-16 md:gap-24"
                    >
      
      {/* Block 1: Form e Info con Bordo e Separatore */}
      <div className="relative w-full 
                      min-h-screen 
                      bg-bg-dark border-[3px] border-stroke-primary overflow-hidden">
        {/* Separatore */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-full h-[2px] lg:w-[2px] lg:h-[80%] 
                        bg-stroke-secondary/50 pointer-events-none" 
                        />

        {/* Grid Form + Info */}
        <div className="relative z-10 
                        grid grid-cols-1 lg:grid-cols-2 
                        gap-10 md:gap-16 p-6 md:p-12
                        min-h-screen items-start">
          <div className="flex justify-start items-start w-full">
            <ContactForm />
          </div>

          <div className="flex flex-col justify-start items-start w-full max-w-xl gap-6">
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide
                          bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent ">
              Alternative di contatto
            </h2>

            {/* Schede Contatto */}
            <div className="w-full
                            flex flex-col 
                            gap-4 "
                            >
              {CONTACT_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="w-full p-4 md:p-5
                            rounded-2xl bg-panel-dark/35 border-2 border-stroke-primary 
                            flex items-center 
                            gap-4 md:gap-5 
                            transition-colors hover:border-orange-start/50"
                >
                  {/* Box Icona SVG */}
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16 
                              shrink-0 
                              object-contain"
                  />

                  {/* Testi */}
                  <div className="flex flex-col flex-1
                                  gap-0.5 
                                  min-w-0"
                                  >
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
        </div>
      </div>
    </div>
  );
}