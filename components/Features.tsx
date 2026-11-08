import type { LucideIcon } from "lucide-react";

interface FeaturesProps {
  title?: string;
  className?: string;
  items?: ElementFeature[];
}

export interface ElementFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Features({
  // Valori di default per le props
  title = "Default Title",
  className,
  items = [],
}: FeaturesProps) {
  return (
    <section className="w-full 
                        bg-panel-background border-y-2 border-stroke-primary 
                        py-16 my-16 
                        transition-colors duration-300"
                        >
      <div className="flex flex-col items-center justify-center
                      max-w-7xl mx-auto 
                      px-6 md:px-12 "
                      >

        <h2 className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-center uppercase tracking-wider leading-tight
                       bg-gradient-to-b text-gradient-orange
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
          {items.map((item) => {
            const FeatureIcon = item.icon;

            return (
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
                              rounded-xl btn-transparent-gradient-orange
                              mb-4  
                              transition-transform group-hover:scale-105">
                  <FeatureIcon
                    aria-hidden="true"
                    className="h-8 w-8 text-orange-gradient-start"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-light-gray-text text-sm leading-relaxed">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
