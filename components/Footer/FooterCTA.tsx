import Link from "next/link";

interface ConsultationSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
  onButtonClick?: () => void;
}

export default function ConsultationSection({
  titleLine1 = 'Scopri il nostro metodo e come possiamo ',
  titleLine2 = 'aiutarti a raggiungere i tuoi obiettivi.',
  buttonText = 'Richiedi una consulenza gratuita',
  buttonHref = '#consulenza',
  className,
  onButtonClick,
}: ConsultationSectionProps) {
  return (
    <section className={className}>
        {/* Titolo Principale in H2 (dimensione contenuta, max 40px) */}
        <div className="text-base sm:text-lg md:text-xl font-bold leading-tight text-foreground tracking-tight">
          {titleLine1}
          <br className="hidden sm:block" />
          {titleLine2}
        </div>

        {/* Bottone Consulenza Gratuita */}
        <Link
          href={buttonHref}
          onClick={onButtonClick}
          className="inline-flex items-center justify-center 
                     px-6 md:px-10 py-4 md:py-5  
                     font-bold text-base sm:text-lg md:text-xl uppercase tracking-wider text-foreground 
                     bg-gradient-to-b from-orange-btn-gradient-start to--orange-btn-gradient-end 
                     border-2 border-orange-btn-border-color shadow-lg rounded-2xl
                     hover:brightness-125 active:scale-95 
                     transition-all duration-300 
                     cursor-pointer
                    ">
          {buttonText}
        </Link>
    </section>
  );
}