import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center font-mono scroll-smooth overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        id="home"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        <div className="space-y-4 sm:space-y-6 text-left">
          <span className="text-amber-500 tracking-wide uppercase text-2xl sm:text-3xl md:text-4xl block">
            <span className="font-bold">Vetra</span> Studio.
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
            Creiamo Esperienze Digitali di Successo.
          </h1>
          <p className="text-light-gray-text text-base sm:text-lg leading-relaxed max-w-lg">
            Design Innovativo, Sviluppo All&apos;Avanguardia, Soluzioni Web su
            Misura per la Tua Azienda.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="relative flex justify-center items-center mt-6 md:mt-0">
  <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full scale-90 sm:scale-100" />

  {/* Logo per TEMA CHIARO (visibile di default, nascosto in dark mode) */}
  <img
    src="/vetra-studio-simbolo.svg"
    alt="Vetra Studio Logo"
    className="w-full max-w-xs sm:max-w-md h-auto object-contain relative z-10 block dark:hidden"
  />

  {/* Logo per TEMA SCURO (nascosto di default, visibile in dark mode) */}
  <img
    src="/vetra-studio-simbolo-bianco.svg"
    alt="Vetra Studio Logo"
    className="w-full max-w-xs sm:max-w-md h-auto object-contain relative z-10 hidden dark:block"
  />
</div>
</section>

      {/* CHI SIAMO SECTION */}
      <section
        id="chi-siamo"
        className="w-full max-w-7xl mx-auto px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16 my-4 sm:my-8 bg-panel-background border border-stroke-primary rounded-2xl md:rounded-3xl shadow-sm"
      >
        <h2 className="text-amber-500 font-bold tracking-wider uppercase text-xl sm:text-2xl mb-6 md:mb-8 text-left">
          CHI SIAMO
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* TEAM IMAGE PLACEHOLDER */}
          <div className="w-full aspect-video bg-card-muted border border-stroke-primary rounded-xl flex items-center justify-center overflow-hidden">
            <div className="text-center text-light-gray-text p-4">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 text-light-gray-text opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-xs sm:text-sm">Immagine Team Placeholder</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-foreground text-base sm:text-lg leading-relaxed">
              Siamo un team di cinque sviluppatori con competenze complementari.
              Copriamo l&apos;intero ciclo di vita di un progetto digitale:
              dalla progettazione dell&apos;architettura al frontend, dal
              backend fino al deployment e alla manutenzione.
            </p>
            <Link
              href="/chi-siamo"
              className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-6 py-3 text-base sm:text-lg font-medium border border-stroke-secondary rounded-lg hover:border-amber-500 hover:text-amber-500 active:scale-95 transition-all text-foreground text-center"
            >
              Scopri l&apos;azienda
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIZI SECTION */}
      <section id="servizi" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl hover:border-amber-500/50 transition-all text-center shadow-sm flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Web Design</h3>

            <p className="text-light-gray-text text-sm leading-relaxed">
              Design innovativo, interfacce curate al dettaglio, il UI/UX su
              misura per elevare il tuo brand.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl hover:border-amber-500/50 transition-all text-center shadow-sm flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">Web Development</h3>

            <p className="text-light-gray-text text-sm leading-relaxed">
              Sviluppo frontend e backend all&apos;avanguardia con tecnologie
              moderne, veloci e scalabili.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl hover:border-amber-500/50 transition-all text-center shadow-sm flex flex-col items-center sm:col-span-2 md:col-span-1">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">SEO & Marketing</h3>

            <p className="text-light-gray-text text-sm leading-relaxed">
              Ottimizzazione sui motori di ricerca e strategie mirate per far
              crescere costantemente il tuo business.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/servizi"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-6 py-3 text-base sm:text-lg font-medium border border-stroke-secondary rounded-lg hover:border-amber-500 hover:text-amber-500 active:scale-95 transition-all text-foreground text-center"
          >
            Scopri tutti i servizi
          </Link>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 relative">
          {[
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
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-amber-500/70 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4 bg-background text-amber-500 shadow-sm">
                {item.step}
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{item.title}</h4>
              <p className="text-light-gray-text text-base sm:text-lg leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* I NOSTRI TRE PILASTRI */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <h2 className="text-amber-500 font-bold text-center tracking-wider text-xl sm:text-2xl mb-8 sm:mb-10">
          I nostri tre pilastri
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl shadow-sm">
            <h3 className="text-amber-500 text-lg sm:text-xl mb-3 text-center">
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

          <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl shadow-sm">
            <h3 className="text-amber-500 text-lg sm:text-xl mb-3 text-center">
              Metodo strutturato
            </h3>
            <p className="text-light-gray-text text-sm sm:text-base leading-relaxed text-center">
              Seguiamo un processo rigoroso, dalla definizione dei requisiti al{" "}
              <strong className="text-foreground">testing finale</strong>.
            </p>
          </div>

          <div className="bg-panel-background border border-stroke-primary p-6 sm:p-8 rounded-2xl shadow-sm">
            <h3 className="text-amber-500 text-lg sm:text-xl mb-3 text-center">
              Collaborazione reale
            </h3>
            <p className="text-light-gray-text text-sm sm:text-base leading-relaxed text-center">
              Lavoriamo come un&apos;unica squadra, unendo competenze diverse
              per un{" "}
              <strong className="text-foreground">prodotto coerente</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* LAVORI REALIZZATI */}
      <section id="lavori" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <h2 className="text-amber-500 font-bold text-center tracking-wider text-xl sm:text-2xl mb-8 sm:mb-12">
          Lavori Realizzati
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-panel-background border border-stroke-primary rounded-2xl overflow-hidden group shadow-sm"
            >
              {/* PORTFOLIO ITEM IMAGE PLACEHOLDER */}
              <div className="aspect-video bg-card-muted border-b border-stroke-primary flex items-center justify-center">
                <div className="text-center text-light-gray-text">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 text-light-gray-text opacity-70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs">Immagine Progetto {item}</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">Progetto {item}</h3>
                <p className="text-light-gray-text text-sm sm:text-base leading-relaxed">
                  Questa è una descrizione generica e sintetica, pensata per
                  offrire una panoramica chiara e completa.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/progetti"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-6 py-3 text-base sm:text-lg font-medium border border-stroke-secondary rounded-lg hover:border-amber-500 hover:text-amber-500 active:scale-95 transition-all text-foreground text-center"
          >
            Guarda tutti i Lavori
          </Link>
        </div>
      </section>
    </main>
  );
}