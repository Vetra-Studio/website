import Form from "@/components/Contact/Form";
import WhyContactUs from "@/components/Reasons";
import { CircleUserRound, Compass, Shield, Users } from 'lucide-react';
import { pageMetadata } from "@/lib/seo";
import Icon from "@/components/Icon";

export const metadata = pageMetadata({
  title: 'Contattaci',
  path: '/contattaci',
  description: 'Contatta Vetra Studio per un preventivo o per maggiori informazioni sui nostri servizi: compila il modulo, ti risponderemo al più presto.',
});



export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center scroll-smooth ">

      <div className="items-center p-4 gap-12 mb-10 md:grid md:grid-cols-2">

        {/* Colonna Sinistra */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gradient-orange md:text-6xl sm:text-5xl">
            Contattaci
          </h1>
          <h2 className="text-lg font-bold leading-relaxed md:text-2xl sm:text-xl">
            Siamo qui per ascoltarti
          </h2>
          <p className="text-base text-light-gray-text leading-relaxed md:text-xl sm:text-lg">
            Hai in mente o vuoi maggiori informazioni sui nostri servizi? <br />
            Compila il modulo o contattaci direttamente.<br />
            Ti risponderemo al più presto.<br />
          </p>
        </div>

        {/* Colonna Destra */}
        <div className="hidden md:flex items-center justify-center">
          <Icon />
        </div>

      </div>

      <div className="">
        <Form className="my-8 w-full max-w-[640px]"/>
      </div>

      <WhyContactUs
        title="perché contattarci"
        listClassName= "lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"
        className="py-16 my-16"
        items={[
          {
            icon: <CircleUserRound className="w-8 h-8 text-amber-600" />,
            title: "Incontro senza impegno",
            description:
              "Parliamo del tuo progetto, rispondiamo alle tue domande e valutiamo insieme le strade migliori.",
          },
          {
            icon: <Compass className="w-8 h-8 text-amber-600" />,
            title: "Soluzione dedicata",
            description:
              "Analizziamo le esigenze della tua attività per sviluppare una strategia coerente con i tuoi obiettivi.",
          },
          {
            icon: <Shield className="w-8 h-8 text-amber-600" />,
            title: "Zero costi nascosti",
            description:
              "Panoramica completa dell'investimento necessario, senza alcuna revisione di prezzo a sorpresa in corso d'opera.",
          },
          {
            icon: <Users className="w-8 h-8 text-amber-600" />,
            title: "Un team al tuo fianco",
            description:
              "Competenze diverse lavorano insieme per seguire ogni dettaglio del progetto con attenzione e precisione.",
          },
        ]}
      />

    </main>
  );
}