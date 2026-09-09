import Image from "next/image";

export interface ElementChoice {
  id: number | string;
  iconSrc: string; // Es. "/servizi/icona1.svg" salvata in public/servizi/
  title: string;
  description: string;
}

const elementiDefault: ElementChoice[] = [
  {
    id: 1,
    iconSrc: "/experience.svg",
    title: "Esperienza",
    description: "Anni di esperienza",
  },
  {
    id: 2,
    iconSrc: "/quality.svg",
    title: "Qualità",
    description: "Lavoro e prestazioni di alta qualità.",
  },
  {
    id: 3,
    iconSrc: "/professional.svg",
    title: "Professionalità",
    description: "Team qualificato e certificato.",
  },
  {
    id: 4,
    iconSrc: "/assistance.svg",
    title: "Assistenza",
    description: "Supporto costante in ogni fase del progetto.",
  },
  {
    id: 5,
    iconSrc: "/solutions.svg",
    title: "Soluzioni personalizzate",
    description: "Progetti su misura per le tue esigenze.",
  },
];

interface ChoiceProps {
  title?: string;
  items?: ElementChoice[];
}

// app/servizi/Choice.tsx

export default function Choice({
  title = "PERCHÉ SCEGLIERE NOI",
  items = elementiDefault,
}: ChoiceProps) {
  return (
    /* Sfondo e bordi adattivi per Light e Dark mode */
    <section className="relative left-1/2 -ml-[50vw] -mr-[50vw] w-screen
                        bg-panel-background 
                        border-y-2 border-stroke-primary 
                        py-16 my-16 
                        transition-colors duration-300"
                        >
      <div className="max-w-7xl 
                      mx-auto px-6 
                      md:px-12"
                      >

        <p className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-center 
                      bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent 
                      uppercase tracking-wider leading-tight 
                      mb-12"
                      >
          {title}
        </p>

        <div className="grid 
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 
                        gap-6 
                        pt-4"
                        >
          {items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-center text-center 
                         p-6 
                         bg-background border border-stroke-primary rounded-2xl shadow-md
                         hover:border-orange-gradient-start hover:-translate-y-1 
                         transition-all duration-300 
                         group"
                         >

              <div className="flex items-center justify-center 
                              w-14 h-14 
                              rounded-xl border border-orange-btn-border-color
                              bg-gradient-to-b from-orange-btn-gradient-start to-orange-btn-gradient-end 
                              mb-4 
                              group-hover:scale-105
                              transition-transform"
                              >

                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <p className="text-lg font-bold text-foreground 
                            mb-2"
                            >
                {item.title}
              </p>

              <p className="text-light-gray-text text-sm 
                            leading-relaxed"
                            >
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}