import Image from 'next/image';

interface Service {
  id: string;
  titolo: string;
  descrizione: string;
  icona: string;
}

const SERVICES: Service[] = [
  {
    id: 'consulenza',
    titolo: 'Consulenza tecnica',
    descrizione: 'Consulenza personalizzata per ogni esigenza',
    icona: '/person.svg',
  },
  {
    id: 'progettazione',
    titolo: 'Progettazione 2D',
    descrizione: 'Visualizza il progetto prima della realizzazione',
    icona: '/tablet.svg',
  },
  {
    id: 'manutenzione',
    titolo: 'Manutenzione',
    descrizione: 'Servizio di manutenzione programmata',
    icona: '/wrench.svg',
  },
];

export default function OptionalServices() {
  return (
    <section className="max-w-7xl 
                        mx-auto 
                        px-4 py-8 
                        space-y-8 md:space-y-12">
      {/* Separatore */}
      <hr className="border-t-2 
                     border-stroke-secondary/50" 
                     />

      {/* Titolo Sezione */}
      <p className="text-center
                    text-2xl md:text-4xl font-semibold uppercase tracking-wider
                    bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent"
                    >
        Servizi Aggiuntivi (Opzionali)
      </p>

      {/* Griglia Schede */}
      <div className="grid 
                      grid-cols-1 md:grid-cols-3 
                      gap-6 lg:gap-8"
                      >
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="flex flex-col items-center text-center
                       bg-panel-background/35 
                       border-2 border-stroke-primary rounded-xl 
                       p-6 lg:p-8  space-y-3"
          >
            <Image
              src={service.icona}
              alt={service.titolo}
              width={80}
              height={80}
              className="pb-3 object-contain"
            />

            <p className="text-xl lg:text-2xl font-semibold 
                          text-foreground 
                          leading-tight"
                          >
              {service.titolo}
            </p>

            <p className="text-base 
                          text-light-gray-text 
                          leading-relaxed"
                          >
              {service.descrizione}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}