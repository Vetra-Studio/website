"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface FooterCTAProps {
  className?: string;
  ButtonClassName?: string;
}

export default function FooterCTA({
  className,
  ButtonClassName,
}: FooterCTAProps) {
  const pathname = usePathname();

  // Nasconde il componente nella pagina contattaci
  if (pathname === "/contattaci") {
    return null;
  }

  return (
    <section className={className}>
      <div className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-foreground tracking-tight">
        <h3>
          Scopri il nostro metodo e come possiamo 
          <br className="hidden sm:block" />
          aiutarti a raggiungere i tuoi obiettivi.
        </h3>
      </div>

      <Link href="/contattaci" className={ButtonClassName}>
        Richiedi una consulenza gratuita
      </Link>
    </section>
  );
}