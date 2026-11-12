import Link from "next/link";
import Image from "next/image";

import { ArrowRight, Pencil, CodeXml, TrendingUp } from "lucide-react";

import heroImage from "@/public/foto/IMG_0244.webp"
import { getLatestProjects } from "@/lib/supabase/queries";
import ProjectCards from "@/components/Projects/ProjectCards";
import Icon from "@/components/Icon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: '/' })

const processSteps = [
  {
    step: "1",
    title: "Analisi",
    desc: "Ascoltiamo le tue esigenze e traduciamo il progetto in minimi dettagli.",
  },
  {
    step: "2",
    title: "Progettazione",
    desc: "Sviluppiamo soluzioni personalizzate e progetti su misura per te.",
  },
  {
    step: "3",
    title: "Realizzazione",
    desc: "Il nostro team realizza i progetti con precisione e nei tempi concordati.",
  },
  {
    step: "4",
    title: "Assistenza",
    desc: "Siamo al tuo fianco anche dopo la consegna, per ogni necessità.",
  },
];

const serviceCards = [
  {
    color: 'gold',
    icon: Pencil,
    title: 'Web Design',
    description: 'Design innovativo, interfacce curate al dettaglio, il UI/UX su misura per elevare il tuo brand.',
    className: '',
  },
  {
    color: 'blue',
    icon: CodeXml,
    title: 'Web Development',
    description: 'Sviluppo frontend e backend all’avanguardia con tecnologie moderne, veloci e scalabili.',
    className: '',
  },
  {
    color: 'rose',
    icon: TrendingUp,
    title: 'SEO & Marketing',
    description: 'Ottimizzazione sui motori di ricerca e strategie mirate per far crescere costantemente il tuo business.',
    className: 'sm:col-span-2 md:col-span-1',
  },
] as const;

const pillars = [
  {
    title: 'Solidità tecnica',
    description: <>Utilizziamo tecnologie moderne e consolidate per garantire <strong className="text-foreground">performance, sicurezza e scalabilità</strong>.</>,
  },
  {
    title: 'Metodo strutturato',
    description: <>Seguiamo un processo rigoroso, dalla definizione dei requisiti al <strong className="text-foreground">testing finale</strong>.</>,
  },
  {
    title: 'Collaborazione reale',
    description: <>Lavoriamo come un’unica squadra, unendo competenze diverse per un <strong className="text-foreground">prodotto coerente</strong>.</>,
  },
];


export default async function Home() {
  const projects = await getLatestProjects(3);

  return (
    <main className="home-page-shell w-full flex flex-col items-center justify-center scroll-smooth overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="lg:max-w-2/3 px-0 sm:px-4 lg:px-0">
        <section
          id="home"
          className="home-hero relative left-1/2 grid w-screen max-w-7xl -translate-x-1/2 items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-12 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-12"
        >
          <div className="space-y-4 sm:space-y-6 text-left">
            <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground">
              Creiamo Esperienze Digitali <span className="hero-heading-accent">di Successo.</span>
            </h1>
            <p className="text-light-gray-text text-base sm:text-2xl">
              Design Innovativo, Sviluppo All’Avanguardia, Soluzioni Web su Misura per la Tua Azienda.
            </p>
            <Link href="/contattaci" className="btn-gradient-orange home-hero-cta">
              Lavoriamo insieme
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          </div>

          {/* HERO IMAGE */}
          <div className="hidden justify-center md:block">
            <Icon className="lg:max-w-[640px]" />
          </div>
        </section>

        {/* CHI SIAMO SECTION */}
        <section
          id="chi-siamo"
          className="about-highlight-card px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16 my-4 sm:my-8 bg-panel-background border border-stroke-primary rounded-2xl md:rounded-3xl"
        >
          <h2 className="font-clash text-orange-gradient-start font-bold tracking-wider uppercase text-xl sm:text-3xl mb-6 md:mb-8 text-left">
            Chi Siamo
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* TEAM IMAGE PLACEHOLDER */}
            <div className="about-image-frame aspect-video bg-card-muted border border-stroke-primary rounded-xl flex items-center justify-center overflow-visible">
              <div className="relative z-10 h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={heroImage}
                  alt="Il team di Vetra Studio al lavoro in ufficio"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-foreground text-base sm:text-xl leading-relaxed">
                Siamo un team di cinque sviluppatori con competenze complementari.
                Copriamo l’intero ciclo di vita di un progetto digitale:
                dalla progettazione dell’architettura al frontend, dal
                backend fino al deployment e alla manutenzione.
              </p>
              <Link
                href="/chi-siamo"
                className="btn-outline-orange"
              >
                Scopri l’azienda
              </Link>
            </div>
          </div>
        </section>

        {/* SERVIZI SECTION */}
        <section id="servizi" className="py-10 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {serviceCards.map(({ color, icon: ServiceIcon, title, description, className = '' }) => (
              <article
                key={title}
                className={`service-card service-card--${color} flex flex-col items-center rounded-2xl border border-stroke-primary bg-panel-background p-6 text-center sm:p-8 ${className}`}
              >
                <div className={`feature-icon feature-icon--${color} mb-6 h-20 w-20 sm:h-24 sm:w-24`}>
                  <ServiceIcon className="h-10 w-10 sm:h-12 sm:w-12" />
                </div>
                <h3 className="mb-3 text-lg font-chillax font-semibold text-foreground sm:text-xl">{title}</h3>
                <p className="text-base leading-relaxed text-light-gray-text lg:text-lg">{description}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/servizi"
              className="btn-outline-orange"
            >
              Scopri tutti i servizi
            </Link>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="process-timeline py-10 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 relative">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="process-step flex flex-col items-center text-center"
              >
                <div className="process-number font-chillax font-semibold w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-orange-gradient-start/70 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4 bg-background text-orange-gradient-start">
                  {item.step}
                </div>

                <h4 className="text-lg sm:text-xl font-chillax font-semibold mb-2 text-foreground">
                  {item.title}
                </h4>

                <p className="text-light-gray-text text-base sm:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* I NOSTRI TRE PILASTRI */}
        <section className="home-pillars py-10 md:py-16">
          <h2 className="font-clash text-orange-gradient-start font-bold text-center tracking-wider text-xl sm:text-4xl mb-8 sm:mb-10">
            I nostri tre pilastri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card rounded-2xl border border-stroke-primary bg-panel-background p-6 sm:p-8">
                <h3 className="mb-3 text-center font-chillax text-lg font-semibold text-orange-gradient-start sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="text-center text-sm leading-relaxed text-light-gray-text sm:text-base">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* LAVORI REALIZZATI */}
        <section id="lavori" className="py-10 md:py-16">
          <h2 className="font-clash text-orange-gradient-start font-bold text-center tracking-wider text-xl sm:text-4xl mb-8 sm:mb-12">
            Lavori Realizzati
          </h2>

          {projects.length === 0 ? (
            <div className="empty-project-state">
              <p className="text-md font-bold text-light-gray-text md:text-xl">Non ci sono progetti disponibili.</p>
            </div>
          ) : (
            <ProjectCards projects={projects} />
          )}

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/progetti"
              className="btn-outline-orange"
            >
              Guarda tutti i Lavori
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
