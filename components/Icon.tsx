import Image from "next/image";

interface SculptureProps {
  className?: string;
}

export default function Icon({ className }: SculptureProps) {
  return (
    /* L'aggiunta di 'isolate' chiude gli effetti interni */
    <div className={`relative flex items-center justify-center w-full max-w-[600px] aspect-square ${className}`}>
  
      {/* 1. Effetto Bagliore Sfocato */}
      <div 
        className="absolute inset-0 rounded-full bg-orange-gradient-start/30 blur-[100px]"
        aria-hidden="true"
      />

      {/* 2. Immagine del Logo */}
      <div className="relative z-10 w-[83%] h-[83%]">
        {/* Logo per Tema Chiaro (visibile di default, nascosto in dark mode) */}
        <Image
          src="/vetra-icon-dark.svg"
          alt="Vetra Studio Logo"
          fill
          priority
          className="object-contain dark:hidden"
        />

        {/* Logo per Tema Scuro (nascosto di default, visibile in dark mode) */}
        <Image
          src="/vetra-icon.svg"
          alt="Vetra Studio Logo"
          fill
          priority
          className="object-contain hidden dark:block"
        />
      </div>

    </div>
  );
}