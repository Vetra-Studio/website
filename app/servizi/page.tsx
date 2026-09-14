// app/servizi/page.tsx
import Image from "next/image";

import Icon from "@/components/Icon";
import FaqSection from "@/components/Services/faq-question";
import PricingPlans from "@/components/Services/packets";
import Features from "@/components/Features";

interface OptionalService {
  titolo: string;
  descrizione: string;
  icona: string;
}

const optionalServices: OptionalService[] = [
  {
    titolo: 'Consulenza tecnica',
    descrizione: 'Consulenza personalizzata per ogni esigenza',
    icona: '/person.svg',
  },
  {
    titolo: 'Progettazione 2D',
    descrizione: 'Visualizza il progetto prima della realizzazione',
    icona: '/tablet.svg',
  },
  {
    titolo: 'Manutenzione',
    descrizione: 'Servizio di manutenzione programmata',
    icona: '/wrench.svg',
  },
];

export default function ServiziPage({
  title = "I nostri servizi",
  description = "Offriamo soluzioni complete per ogni esigenza. Qualità, competenza e attenzione ai dettagli ci distinguono.",
}) {
  return (
    <main className="flex flex-col items-center justify-center">

      <div className="grid grid-cols-1 lg:grid-cols-2 
                      gap-12 
                      items-center 
                      px-6 sm:px-10 lg:px-16 
                      max-w-7xl mx-auto">

      {/* Colonna Sinistra: Testi */}
      <div className="flex flex-col items-start 
                      gap-4 
                      max-w-2xl mx-auto ">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold 
                      bg-gradient-to-b text-gradient-orange  
                      leading-tight tracking-tight"
        >
          {title}
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl 
                      text-light-gray-text 
                      leading-relaxed"
        >
          {description}
        </p>
      </div>

      {/* Colonna Destra: Grafica Logo con Sfocatura */}
      <Icon />
    </div>

      

      {/* Sezione Prezzi */}
      <PricingPlans />

      

      {/* Servizi Aggiuntivi */}
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
                         bg-gradient-to-b text-gradient-orange"
        >
          Servizi Aggiuntivi (Opzionali)
        </p>

        {/* Griglia Schede */}
        <div className="grid 
                           grid-cols-1 md:grid-cols-3 
                           gap-6 lg:gap-8"
        >
          {optionalServices.map((OptionalService) => (
            <article
              key={OptionalService.titolo}
              className="flex flex-col items-center text-center
                            bg-panel-background/35 
                            border-2 border-stroke-primary rounded-xl 
                            p-6 lg:p-8  space-y-3"
            >
              <Image
                src={OptionalService.icona}
                alt={OptionalService.titolo}
                width={80}
                height={80}
                className="pb-3 object-contain"
              />

              <p className="text-xl lg:text-2xl font-semibold 
                               text-foreground 
                               leading-tight"
              >
                {OptionalService.titolo}
              </p>

              <p className="text-base 
                               text-light-gray-text 
                               leading-relaxed"
              >
                {OptionalService.descrizione}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Sezione Perché Scegliere Noi */}
      <Features
        title="Perché Scegliere Noi"
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        items={[
          {
            iconSrc: "/passion.svg",
            title: "Passione",
            description: "Affrontiamo ogni progetto con entusiasmo, precisione e voglia di fare.",
          },
          {
            iconSrc: "/innovation.svg",
            title: "Innovazione",
            description: "Cerchiamo approcci e soluzioni sempre nuovi per affrontare ogni esigenza con uno sguardo al futuro.",
          },
          {
            iconSrc: "/assistance.svg",
            title: "Assistenza",
            description: "Ti affianchimo con disponibilità e supporto, dalla progettazione alla realizzazione.",
          },
          {
            iconSrc: "/reliability.svg",
            title: "Affidabilità",
            description: "Manteniamo gli impegni presi e rispettiamo tempi e accordi, costruendo rapporti basati su serietà, chiarezza e fiducia.",
          },
          {
            iconSrc: "/communication.svg",
            title: "Comunicazione",
            description: "Confronto diretto e aggiornamenti chiari durante il progetto.",
          },
        ]}

      />


      {/* Sezione FAQ */}
      <FaqSection />

    </main>
  );
}