import Link from "next/link";
import Image from "next/image";

import { Pencil, CodeXml, TrendingUp } from "lucide-react";

import heroImage from "@/public/foto/IMG_0244.webp"
import { Suspense } from "react";

import { getLatestProjects } from "@/lib/supabase/queries";
import LatestProjects from "@/components/Projects/LatestProjects";
import Icon from "@/components/Icon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: '/' })

export const processSteps = [
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


export default async function Home() {
  const projects = await getLatestProjects(3);

  return (
    <main className="w-full flex flex-col items-center justify-center scroll-smooth overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="lg:max-w-2/3 px-0 sm:px-4 lg:px-0">
        <section
          id="home"
          className="py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div className="space-y-4 sm:space-y-6 text-left">
            <span className="font-clash text-amber-500 tracking-wide uppercase text-2xl sm:text-3xl md:text-4xl block">
              <span className="font-bold">Vetra</span> Studio.
            </span>
            <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground">
              Creiamo Esperienze Digitali di Successo.
            </h1>
            <p className="text-light-gray-text text-base sm:text-2xl">
              Design Innovativo, Sviluppo All’Avanguardia, Soluzioni Web su Misura per la Tua Azienda.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center hidden md:block">
            <Icon />
          </div>
        </section>

        {/* CHI SIAMO SECTION */}
        <section
          id="chi-siamo"
          className="px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16 my-4 sm:my-8 bg-panel-background border border-stroke-primary rounded-2xl md:rounded-3xl"
        >
          <h2 className="font-clash text-amber-500 font-bold tracking-wider uppercase text-xl sm:text-3xl mb-6 md:mb-8 text-left">
            Chi Siamo
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* TEAM IMAGE PLACEHOLDER */}
            <div className="aspect-video bg-card-muted border border-stroke-primary rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Il team di Vetra Studio al lavoro in ufficio"
                  className="w-full max-w-4xl rounded-lg"
                  priority
                />
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
                className="inline-flex items-center justify-center px-6 py-3 
                text-base sm:text-lg font-medium text-center text-amber-500
                border rounded-lg border-amber-500 
                active:scale-95 transition-all"
              >
                <button>
                  Scopri l’azienda
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVIZI SECTION */}
        <section id="servizi" className="py-10 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl text-center flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-6">
                <Pencil className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />
              </div>

              <h3 className="text-lg sm:text-xl font-chillax font-semibold mb-3 text-foreground">Web Design</h3>

              <p className="text-light-gray-text text-base lg:text-lg leading-relaxed">
                Design innovativo, interfacce curate al dettaglio, il UI/UX su
                misura per elevare il tuo brand.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl text-center flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-6">
                <CodeXml className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />
              </div>

              <h3 className="text-lg sm:text-xl font-chillax font-semibold mb-3 text-foreground">Web Development</h3>

              <p className="text-light-gray-text text-base lg:text-lg leading-relaxed">
                Sviluppo frontend e backend all’avanguardia con tecnologie
                moderne, veloci e scalabili.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl text-center flex flex-col items-center sm:col-span-2 md:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />
              </div>

              <h3 className="text-lg sm:text-xl font-chillax font-semibold mb-3 text-foreground">SEO & Marketing</h3>

              <p className="text-light-gray-text text-base lg:text-lg leading-relaxed">
                Ottimizzazione sui motori di ricerca e strategie mirate per far
                crescere costantemente il tuo business.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/servizi"
              className="inline-flex items-center justify-center px-6 py-3 
              text-base sm:text-lg font-medium text-center text-amber-500
              border rounded-lg border-amber-500 
              active:scale-95 transition-all"
            >
              <button>
                Scopri tutti i servizi
              </button>
            </Link>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="py-10 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 relative">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center"
              >
                <div className="font-chillax font-semibold w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-amber-500/70 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4 bg-background text-amber-500">
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
        <section className="py-10 md:py-16">
          <h2 className="font-clash text-amber-500 font-bold text-center tracking-wider text-xl sm:text-4xl mb-8 sm:mb-10">
            I nostri tre pilastri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl">
              <h3 className="font-chillax font-semibold text-amber-500 text-lg sm:text-xl mb-3 text-center">
                Solidità tecnica
              </h3>
              <p className="text-light-gray-text text-sm sm:text-base leading-relaxed text-center">
                Utilizziamo tecnologie moderne e consolidate per garantire{" "}
                <strong className="text-foreground">
                  performance, sicurezza e scalabilità
                </strong>
                .
              </p>
            </div>

            <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl">
              <h3 className="font-chillax font-semibold text-amber-500 text-lg sm:text-xl mb-3 text-center">
                Metodo strutturato
              </h3>
              <p className="text-light-gray-text text-sm sm:text-base leading-relaxed text-center">
                Seguiamo un processo rigoroso, dalla definizione dei requisiti al{" "}
                <strong className="text-foreground">testing finale</strong>.
              </p>
            </div>

            <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl">
              <h3 className="font-chillax font-semibold text-amber-500 text-lg sm:text-xl mb-3 text-center">
                Collaborazione reale
              </h3>
              <p className="text-light-gray-text text-sm sm:text-base leading-relaxed text-center">
                Lavoriamo come un’unica squadra, unendo competenze diverse
                per un{" "}
                <strong className="text-foreground">prodotto coerente</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* LAVORI REALIZZATI */}
        <section id="lavori" className="py-10 md:py-16">
          <h2 className="font-clash text-amber-500 font-bold text-center tracking-wider text-xl sm:text-4xl mb-8 sm:mb-12">
            Lavori Realizzati
          </h2>

          <div>
            <Suspense fallback={null}>
            {projects.length === 0 ? (
              <p className="py-6 text-center text-md md:text-xl font-bold text-light-gray-text">Non ci sono progetti disponibili.</p>
            ) : (
              <>            
                  <LatestProjects projects={projects} />
                </>
            )}
            </Suspense>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/progetti"
              className="inline-flex items-center justify-center px-6 py-3 
              text-base sm:text-lg font-medium text-center text-amber-500
              border rounded-lg border-amber-500 
              active:scale-95 transition-all"
            >
              <button>
                Guarda tutti i Lavori
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}