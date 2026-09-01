import Image from "next/image";

interface SculptureProps {
  className?: string;
}

export default function Sculpture({ className = "" }: SculptureProps) {
  return (
    /* L'aggiunta di 'isolate' chiude gli effetti interni */
    <div className={`relative isolate flex items-center justify-center w-full max-w-[600px] aspect-square ${className}`}>
      
      {/* 1. Effetto Bagliore Sfocato */}
      <div 
        className="absolute inset-0 rounded-full bg-orange-gradient-start/30 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Immagine del Logo */}
      <div className="relative z-10 w-[83%] h-[83%]">
        <Image
          src="/vetra-logo.png"
          alt="Vetra Studio Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

    </div>
  );
}