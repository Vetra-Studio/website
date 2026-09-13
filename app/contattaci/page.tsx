import Form from "@/components/Contact/Form";
import WhyContactUs from "@/components/Reasons";
import Image from "next/image";
//import { CircleUserRound, Compass, Shield, UserGroup } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center scroll-smooth ">

      <div className="items-center p-4 gap-12 mb-10 grid grid-cols-2 ">

        {/* Colonna Sinistra */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gradient-orange md:text-6xl sm:text-5xl">
            Contattaci
          </h1>
          <h2 className="text-lg font-bold text-light-gray-text leading-relaxed md:text-2xl sm:text-xl">
            Siamo qui per ascoltarti
          </h2>
          <h3 className="text-base text-light-gray-text leading-relaxed md:text-xl sm:text-lg">
            Hai in mente o vuoi maggiori informazioni sui nostri servizi? <br />
            Compila il modulo o contattaci direttamente.<br />
            Ti risponderemo al più presto.<br />
          </h3>
        </div>

        {/* Colonna Destra */}
        <div className="flex justify-center">
          <Image src="/vetra-icon.svg" alt="logo" width={300} height={300} className="hidden md:block" />
        </div>

      </div>

      <div className="w-full bg-panel-background border-y-2 border-stroke-primary">
        <Form className="mx-auto my-8 w-fit"/>
      </div>

      <WhyContactUs
        title="perché contattarci"
        listClassName= "lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"
        className="py-16 my-16"
        items={[
          {
            iconSrc: "/CircleUserRound.svg",
            title: "Incontro senza impegno",
            description:
              "Parliamo del tuo progetto, rispondiamo alle tue domande e valutiamo insieme le strade migliori.",
          },
          {
            iconSrc: "/target.svg",
            title: "Soluzione dedicata",
            description:
              "Analizziamo le esigenze della tua attività per sviluppare una strategia coerente con i tuoi obiettivi.",
          },
          {
            iconSrc: "/shield.svg",
            title: "Zero costi nascosti",
            description:
              "Panoramica completa dell'investimento necessario, senza alcuna revisione di prezzo a sorpresa in corso d'opera.",
          },
          {
            iconSrc: "/UserGroup.svg",
            title: "Un team al tuo fianco",
            description:
              "Competenze diverse lavorano insieme per seguire ogni dettaglio del progetto con attenzione e precisione.",
          },
        ]}
      />

    </main>
  );
}