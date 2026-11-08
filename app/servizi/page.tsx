// app/servizi/page.tsx
import Icon from "@/components/Icon";
import FaqSection from "@/components/Services/faq-question";
import PricingPlans from "@/components/Services/packets";
import Reasons from "@/components/Reasons";
import {
  FileText,
  Images,
  Languages,
  PlugZap,
  Mail,
  MapPin,
  Wrench,
  Headset,
  Heart,
  Lightbulb,
  ShieldCheck,
  MessagesSquare,
} from "lucide-react";

const additionalServices = [
  {
    titolo: "Testi del sito",
    descrizione: "Correzione o aggiornamento di testi brevi. Riscritture complete e nuovi contenuti possono richiedere un preventivo.",
    icona: FileText,
    prezzo: "Da 30 €",
  },
  {
    titolo: "Foto",
    descrizione: "Sostituzione o aggiunta di poche immagini. Molte immagini, elaborazioni o ricerca fotografica specifica possono richiedere un preventivo.",
    icona: Images,
    prezzo: "Da 20 €",
  },
  {
    titolo: "Traduzione",
    descrizione: "Traduzione di brevi testi o aggiornamenti. Il prezzo varia in base a parole, pagine e lingue richieste.",
    icona: Languages,
    prezzo: "Da 30 € per lingua",
  },
  {
    titolo: "Servizi esterni",
    descrizione: "Configurazione di servizi esterni e integrazioni semplici. Il costo del servizio è a carico del cliente; le integrazioni complesse richiedono un preventivo.",
    icona: PlugZap,
    prezzo: "Da 50 €",
  },
  {
    titolo: "Email",
    descrizione: "Configurazione di un indirizzo o correzione delle impostazioni di base. Il costo dello spazio email è a carico del cliente; più caselle o migrazioni richiedono un preventivo.",
    icona: Mail,
    prezzo: "Da 25 €",
  },
  {
    titolo: "Google Business Profile",
    descrizione: "Aggiornamento di informazioni o immagini di una scheda esistente. La creazione da zero richiede un preventivo.",
    icona: MapPin,
    prezzo: "Da 40 €",
  },
  {
    titolo: "Modifiche ai contenuti fuori contratto",
    descrizione: "Per aggiornamenti o richieste non inclusi nel contratto. Il costo dipende dalle pagine toccate: 50 € per una pagina, 80 € per due. Oltre due pagine, su preventivo.",
    icona: Wrench,
    prezzo: "Da 50 €",
  },
  {
    titolo: "Assistenza oltre il periodo incluso",
    descrizione: "Estensione del servizio di assistenza per dodici mesi.",
    icona: Headset,
    prezzo: "400 € / 12 mesi",
  },
];

export default function ServiziPage({
  title = "I nostri servizi",
  description = "Offriamo soluzioni complete per ogni esigenza. Qualità, competenza e attenzione ai dettagli ci distinguono.",
}) {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
        {/* Colonna Sinistra: Testi */}
        <div className="mx-auto flex max-w-2xl flex-col items-start gap-4">
          <h2 className="bg-gradient-to-b text-4xl font-bold leading-tight tracking-tight text-gradient-orange sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-light-gray-text sm:text-xl md:text-2xl">
            {description}
          </p>
        </div>

        {/* Colonna Destra: Grafica Logo con Sfocatura */}
        <div className="hidden lg:block">
          <Icon />
        </div>
      </div>

      {/* Sezione Prezzi */}
      <PricingPlans />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-8 md:space-y-12">
        {/* Separatore */}
        <hr className="border-t-2 border-stroke-secondary/50" />

        {/* Titolo Sezione */}
        <div className="space-y-3 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-wider bg-gradient-to-b text-gradient-orange">
            Completa il tuo piano
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-light-gray-text">
            Servizi aggiuntivi per adattare il progetto alle tue esigenze. I prezzi indicati sono tariffe di partenza; per lavori più ampi definiamo un preventivo.
          </p>
        </div>

        {/* Griglia Schede */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {additionalServices.map((service) => {
            const ServiceIcon = service.icona;

            return (
              <article
                key={service.titolo}
                className="flex flex-col items-center space-y-4 rounded-2xl border border-stroke-primary bg-panel-background/35 p-6 text-center"
              >
                <ServiceIcon
                  aria-hidden="true"
                  className="h-12 w-12 text-orange-gradient-start"
                  strokeWidth={1.75}
                />

                <h3 className="min-h-14 text-lg font-semibold leading-snug text-foreground">
                  {service.titolo}
                </h3>

                <p className="min-h-20 text-sm leading-relaxed text-light-gray-text">
                  {service.descrizione}
                </p>

                <p className="mt-auto w-full border-t border-stroke-primary pt-4 text-base font-bold text-orange-gradient-start">
                  {service.prezzo}
                </p>
              </article>
            );
          })}
        </div>

        <p className="text-center text-sm leading-relaxed text-light-gray-text">
          Eventuali costi di dominio, spazio email e servizi esterni sono a carico del cliente, che gestisce i relativi abbonamenti. Noi ci occupiamo della configurazione. I lavori più ampi e la creazione da zero di una scheda Google Business Profile sono su preventivo.
        </p>
      </section>

      {/* Sezione Perché Scegliere Noi */}
      <Reasons
        title="Perché Scegliere Noi"
        listClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        className="bg-panel-background border-y-2 border-stroke-primary
                   py-16 my-16 
                   transition-colors duration-300"
        items={[
          {
            icon: <Heart className="w-8 h-8 text-amber-600"/>,
            title: "Passione",
            description: "Affrontiamo ogni progetto con entusiasmo, precisione e voglia di fare.",
          },
          {
            icon: <Lightbulb className="w-8 h-8 text-amber-600"/>,
            title: "Innovazione",
            description: "Cerchiamo approcci e soluzioni sempre nuovi per affrontare ogni esigenza con uno sguardo al futuro.",
          },
          {
            icon: <Headset className="w-8 h-8 text-amber-600"/>,
            title: "Assistenza",
            description: "Ti affianchiamo con disponibilità e supporto, dalla progettazione alla realizzazione.",
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-amber-600"/>,
            title: "Affidabilità",
            description: "Manteniamo gli impegni presi e rispettiamo tempi e accordi, costruendo rapporti basati su serietà, chiarezza e fiducia.",
          },
          {
            icon: <MessagesSquare className="w-8 h-8 text-amber-600"/>,
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
