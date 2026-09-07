import Image from "next/image";

export interface ElementChoice {
  id: number | string;
  iconSrc: string;
  title: string;
  description: string;
}

const elementiDefault: ElementChoice[] = [
  {
    id: 1,
    iconSrc: "/person.svg",
    title: "Consulenze gratuite",
    description: "Analizziamo le tue esigenze per offrirti la soluzione migliore.",
  },
  {
    id: 2,
    iconSrc: "/clock.svg",
    title: "Risposta rapida",
    description: "Ti garantiamo un riscontro entro 24 ore lavorative.",
  },
  {
    id: 3,
    iconSrc: "/experience.svg",
    title: "Preventivi chiari",
    description: "Proposte trasparenti, dettagliate e senza alcun impegno.",
  },
  {
    id: 4,
    iconSrc: "/professional.svg",
    title: "Professionalità",
    description: "Un team di esperti qualificati al tuo fianco.",
  },
];

interface ChoiceProps {
  title?: string;
  items?: ElementChoice[];
}

export default function Choice({
  title = "PERCHÉ CONTATTARCI",
  items = elementiDefault,
}: ChoiceProps) {
  return (
    <section className="relative left-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-panel-background border-y-2 border-stroke-primary py-16 my-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center">

        <h2 className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-center bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent uppercase tracking-wider leading-tight mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center p-6 bg-background border border-stroke-primary rounded-2xl transition-all duration-300 hover:border-orange-gradient-start hover:-translate-y-1 shadow-md group"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-b from-orange-btn-gradient-start to-orange-btn-gradient-end border border-orange-btn-border-color mb-4 transition-transform group-hover:scale-105">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>

              <p className="text-light-gray-text text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}