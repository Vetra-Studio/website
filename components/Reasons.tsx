import Image from "next/image";

interface ChoiceProps {
  title?: string;
  className?: string;
  items?: ElementChoice[];
}

export interface ElementChoice {
  iconSrc: string;
  title: string;
  description: string;
}

export default function Choice({
  // Valori di default per le props
  title = "Default Title",
  className,
  items = [],
}: ChoiceProps) {
  return (
    <section className="relative left-1/2 -ml-[50vw] -mr-[50vw] w-screen 
                        bg-panel-background border-y-2 border-stroke-primary 
                        py-16 my-16 
                        transition-colors duration-300"
                        >
      <div className="flex flex-col items-center justify-center
                      max-w-7xl mx-auto 
                      px-6 md:px-12 "
                      >

        <h2 className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-center uppercase tracking-wider leading-tight
                       bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent 
                       mb-12"
                       >
          {title}
        </h2>

        {/* Struttura semantica pulita con <ul> e <li> */}
        <ul className={`grid 
                      ${className}
                       gap-6 
                       w-full 
                       pt-4`}>
          {items.map((item) => (
            <li
              key={item.title}
              className="group 
                         flex flex-col items-center text-center 
                         p-6 
                         bg-background border border-stroke-primary rounded-2xl shadow-md
                         transition-all duration-300 hover:border-orange-gradient-start
                         hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 
                              rounded-xl bg-gradient-to-b from-orange-btn-gradient-start to-orange-btn-gradient-end border border-orange-btn-border-color 
                              mb-4 
                              transition-transform group-hover:scale-105">
                <Image
                  src={item.iconSrc}
                  alt="" /* Vuoto per icone decorative per evitare ridondanza con h3 */
                  aria-hidden="true"
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
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}