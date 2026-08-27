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
    <section className="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
        {/* Separatore */}
        <hr className="w-full h-[2px] bg-stroke-secondary/50 border-none mb-8 md:mb-12" />

        {/* Titolo Sezione */}
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-12 bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent">
            SERVIZI AGGIUNTIVI (OPZIONALI)
        </h2>

        {/* Griglia Schede: 3 in riga da tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {SERVICES.map((service) => (
            <article
                key={service.id}
                className="w-full bg-panel-background/35 border-2 border-stroke-primary rounded-xl p-6 lg:p-8 flex flex-col items-center"
            >
                {/* Icona */}
                <div className="relative w-20 h-20 mb-6 flex justify-center items-center">
                <Image
                    src={service.icona}
                    alt={service.titolo}
                    fill
                    className="object-contain"
                />
                </div>

                {/* Titolo */}
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 text-center leading-tight">
                {service.titolo}
                </h3>

                {/* Descrizione */}
                <p className="text-base font-normal text-light-gray-text text-center leading-relaxed">
                {service.descrizione}
                </p>
            </article>
            ))}
        </div>
    </section>
  );
}