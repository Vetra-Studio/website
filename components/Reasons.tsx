import Image from "next/image";

interface ChoiceProps {
  title: string;
  listClassName?: string;
  className?: string;
  items: ElementChoice[];
}

interface ElementChoice {
  iconSrc: string;
  title: string;
  description: string;
}

export default function Choice({
  title,
  listClassName,
  className,
  items,
}: ChoiceProps) {
  return (
    <section className={`w-full transition-colors duration-300${className}`}>
      <div className="flex flex-col items-center justify-center
                      max-w-7xl mx-auto 
                      px-6 md:px-12 "
                      >

        <h2 className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-center uppercase tracking-wider leading-tight text-gradient-orange mb-12" >
          {title}
        </h2>

        {/* Struttura semantica pulita con <ul> e <li> */}
        <ul className={`grid
                      ${listClassName}
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
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
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