export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center font-mono scroll-smooth">
      {/* HERO SECTION */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <span className="text-amber-500 tracking-wide uppercase text-4xl">
            <span className="font-bold">Vetra</span> Studio.
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Creiamo Esperienze Digitali di Successo.
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
            Design Innovativo, Sviluppo All&apos;Avanguardia, Soluzioni Web su
            Misura per la Tua Azienda.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full" />

          <img
            src="/vetra_logo_nosfondo_bianco.png"
            alt="Vetra Studio"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CHI SIAMO SECTION */}
      <section
        id="chi-siamo"
        className="max-w-7xl mx-auto px-20 py-16 my-8 bg-[#101218] border border-neutral-800/60 rounded-3xl"
      >
        <h2 className="text-amber-500 font-bold tracking-wider uppercase text-2xl mb-8">
          CHI SIAMO
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* TEAM IMAGE PLACEHOLDER */}
          <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center overflow-hidden">
            <div className="text-center text-neutral-500 p-4">
              <svg
                className="w-12 h-12 mx-auto mb-2 text-neutral-600"
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
              <span className="text-sm">Immagine Team Placeholder</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-neutral-300 text-lg leading-relaxed">
              Siamo un team di cinque sviluppatori con competenze complementari.
              Copriamo l&apos;intero ciclo di vita di un progetto digitale:
              dalla progettazione dell&apos;architettura al frontend, dal
              backend fino al deployment e alla manutenzione.
            </p>
            <button className="px-6 py-2.5 text-lg font-medium border border-neutral-700 rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all">
              Scopri l&apos;azienda
            </button>
          </div>
        </div>
      </section>

      {/* SERVIZI SECTION */}
      <section id="servizi" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-[#101218] border border-neutral-800/80 p-8 rounded-2xl min-h-[320px] hover:border-amber-500/40 transition-all text-center">
            <div className="w-24 h-24 bg-amber-900/30 border border-amber-800/50 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-12 h-12 text-amber-500"
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

            <h3 className="text-xl font-bold mb-3">Web Design</h3>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Design innovativo, interfacce curate al dettaglio, il UI/UX su
              misura per elevare il tuo brand.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#101218] border border-neutral-800/80 p-8 rounded-2xl hover:border-amber-500/40 transition-all text-center">
            <div className="w-24 h-24 bg-amber-900/30 border border-amber-800/50 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-12 h-12 text-amber-500"
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

            <h3 className="text-xl font-bold mb-3">Web Development</h3>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Sviluppo frontend e backend all&apos;avanguardia con tecnologie
              moderne, veloci e scalabili.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#101218] border border-neutral-800/80 p-8 rounded-2xl hover:border-amber-500/40 transition-all text-center">
            <div className="w-24 h-24 bg-amber-900/30 border border-amber-800/50 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-12 h-12 text-amber-500"
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

            <h3 className="text-xl font-bold mb-3">SEO & Marketing</h3>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Ottimizzazione sui motori di ricerca e strategie mirate per far
              crescere costantemente il tuo business.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-2.5 text-lg font-medium border border-neutral-700 rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all">
            Scopri tutti i servizi
          </button>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-24 relative">
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
              <div className="w-32 h-32 rounded-full border-2 border-amber-500/70 flex items-center justify-center text-3xl font-bold mb-4 bg-[#090A0F]">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* I NOSTRI TRE PILASTRI */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-amber-500 font-bold text-center tracking-wider text-2xl mb-10">
          I nostri tre pilastri
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-[#101218] border border-neutral-800/80 p-8 rounded-2xl">
            <h3 className="text-amber-500 text-xl  mb-3 text-center">
              Solidità tecnica
            </h3>
            <p className="text-neutral-400 text-base leading-relaxed text-center">
              Utilizziamo tecnologie moderne e consolidate per garantire{" "}
              <strong className="text-neutral-200">
                performance, sicurezza e scalabilità
              </strong>
              .
            </p>
          </div>

          <div className="bg-[#101218] border border-neutral-800/80 p-8 rounded-2xl">
            <h3 className="text-amber-500 text-xl mb-3 text-center">
              Metodo strutturato
            </h3>
            <p className="text-neutral-400 text-base leading-relaxed text-center">
              Seguiamo un processo rigoroso, dalla definizione dei requisiti al{" "}
              <strong className="text-neutral-200">testing finale</strong>.
            </p>
          </div>

          <div className="bg-[#101218] border border-neutral-800/80 p-8 rounded-2xl">
            <h3 className="text-amber-500 text-xl mb-3 text-center">
              Collaborazione reale
            </h3>
            <p className="text-neutral-400 text-base leading-relaxed text-center">
              Lavoriamo come un&apos;unica squadra, unendo competenze diverse
              per un{" "}
              <strong className="text-neutral-200">prodotto coerente</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* LAVORI REALIZZATI */}
      <section id="lavori" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-amber-500 font-bold text-center tracking-wider text-2xl mb-12">
          Lavori Realizzati
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#101218] border border-neutral-800/80 rounded-2xl overflow-hidden group"
            >
              {/* PORTFOLIO ITEM IMAGE PLACEHOLDER */}
              <div className="aspect-video bg-neutral-900 border-b border-neutral-800 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <svg
                    className="w-10 h-10 mx-auto mb-1 text-neutral-600"
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

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Progetto {item}</h3>
                <p className="text-neutral-400 text-base leading-relaxed">
                  Questa è una descrizione generica e sintetica, pensata per
                  offrire una panoramica chiara e completa.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-2.5 text-lg font-medium border border-neutral-700 rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all">
            Guarda tutti i Lavori
          </button>
        </div>
      </section>
    </main>
  );
}
