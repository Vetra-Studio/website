import type { Metadata } from 'next'
import { MarqueeTech } from "@/components/ui/MarqueeTech"
import Link from "next/link";
import { Eye, ListCheck, MousePointerClick, FingerprintPattern } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'Scopri Vetra Studio, il nostro approccio e il team che trasforma le idee in esperienze digitali.',
  alternates: {
    canonical: '/chi-siamo',
  },
}

const values = [
  {
    title: "Su misura",
    description: "Il progetto nasce dalle esigenze reali di chi lo commissiona.",
  },
  {
    title: "Trasparenti",
    description: "Condividiamo scelte, costi e avanzamento del progetto in tempo reale.",
  },
  {
    title: "Qualità",
    description: "Massimo impegno, cura di ogni dettaglio e un obiettivo comune: il tuo risultato.",
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Più visibilità",
    description: "Una presenza online curata permette a un'attività di raggiungere più utenti.",
  },
  {
    icon: ListCheck,
    title: "Più chiarezza",
    description: "Struttura e contenuti devono rendere immediato capire chi sei, cosa offri e come contattarti.",
  },
  {
    icon: MousePointerClick,
    title: "Un'esperienza migliore",
    description: "Prestazioni, responsive design e usabilità contribuiscono a rendere il sito efficace su ogni dispositivo.",
  },
  {
    icon: FingerprintPattern,
    title: "Una storia unica",
    description: "Ogni progetto ha un'anima propria che trasformiamo in un'identità digitale capace di rappresentarlo.",
  },
];

const teamMembers = [
  {
    name: "Orso",
    role: "Client Manager",
    description:
      "Punto di riferimento per il cliente. Ascolta le esigenze iniziali, gestisce preventivi e aspetti amministrativi e garantisce massima trasparenza su tempi e costi.",
  },
  {
    name: "Elia",
    role: "Technical Lead",
    description:
      "Definisce l'architettura del codice e le tecnologie da utilizzare, assicurando che il sito sia veloce, sicuro, ben strutturato e facile da aggiornare nel tempo.",
  },
  {
    name: "Alfonso",
    role: "UI/UX Designer",
    description:
      "Progetta la struttura visiva e l'interfaccia delle pagine, creando un'esperienza di navigazione intuitiva, curata nei dettagli e coerente con la tua identità.",
  },
  {
    name: "Sella",
    role: "Web Developer",
    description:
      "Trasforma i layout in codice, curando l'integrazione di tutte le funzionalità e verificando che il sito funzioni in modo fluido su ogni dispositivo.",
  },
  {
    name: "Ricky",
    role: "Project Manager",
    description:
      "Organizza le fasi di lavoro del team, coordina le scadenze e fa in modo che ogni progetto proceda senza intoppi dalla prima bozza alla pubblicazione.",
  },
];

const principles = [
  {
    number: "01",
    title: "Struttura & Misurabilità",
    description:
      "Lavoriamo su SEO, prestazioni e chiarezza per fare in modo che il sito sia facile da trovare e performante sui motori di ricerca.",
  },
  {
    number: "02",
    title: "Esperienza Utente Chiara",
    description:
      "Progettiamo ogni pagina affinché chi naviga trovi ciò che cerca in pochi secondi e possa contattarti senza ostacoli.",
  },
  {
    number: "03",
    title: "Scelte Guidate dai Dati",
    description:
      "Ogni intervento sul sito ha uno scopo preciso: analizziamo visite, conversioni e posizionamento per affinare il progetto nel tempo.",
  },
];

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center font-mono scroll-smooth sm:mx-25 mx-6">

      {/* Hero */}
      <div className="sm:grid sm:grid-cols-2 pt-5 sm:pt-15 pb-15 sm:gap-15 border-b border-stroke-primary">
        <div>
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Chi Siamo</h1>
          <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Costruiamo il digitale partendo dalle persone.</h2>
          <p className="text-base mb-8">
            Siamo Vetra Studio, un team che progetta e sviluppa siti web su misura. Siamo partiti dalla voglia di metterci alla prova insieme,
            unendo competenze diverse per creare soluzioni in cui ogni parte, dal design al codice, abbia uno scopo preciso.
          </p>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-stroke-primary sm:divide-x-1 sm:divide-stroke-primary">
            {values.map((value) => (
              <div key={value.title} className="pb-2 pt-6 last:pb-0 sm:pr-4">
                <h3 className="block font-bold">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* TODO-MERGE: sostituire con Image component dopo il merge + "hidden sm:block" */}
        </div>
      </div>

      {/* Perche lo facciamo */}
      <div className="flex flex-col py-20 items-center border-b border-stroke-primary">
        <div className="sm:w-5/8 sm:text-center">
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Perché lo facciamo</h1>
          <h2 className="text-3xl font-semibold mb-4">Un sito deve avere un motivo per esistere.</h2>
          <p className="text-base mb-8">
            Non ci interessa realizzare una pagina che sia soltanto gradevole da vedere. Un sito non è solo una vetrina, 
            ma uno strumento che deve funzionare, comunicare e portare valore alla tua attività.
          </p>
        </div>
        {/* griglia 2x2 */}
        <div className="sm:grid sm:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="flex gap-4 pb-2 pt-6 last:pb-0 sm:pr-4">
                <div><Icon /></div>
                <div>
                  <h3 className="font-bold">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* la nostra storia */}
      <div className="sm:grid sm:grid-cols-2 py-20 items-center border-b border-stroke-primary">
        <div>
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">La nostra storia</h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Tutto è iniziato dalla voglia di metterci alla prova.</h2>
          <p className="text-base mb-5">
            L'idea di Vetra Studio è nata dall'incontro di due esigenze. Da una parte, la volontà di metterci alla prova insieme 
            in un'iniziativa concreta, in cui ciascuno potesse mettere in campo le proprie competenze. Dall'altra parte, la consapevolezza 
            di quanto sia fondamentale una presenza online curata per qualsiasi attività.
            <br/><br/>
            Abbiamo così costruito un percorso di lavoro condiviso, definendo fin da subito ruoli chiari e un approccio basato sul confronto: 
            ascoltare prima di progettare, capire le esigenze dell'attività e trasformarle in un'esperienza digitale coerente. 
            Non volevamo limitarci a scrivere codice o a realizzare qualcosa di bello da vedere, ma creare progetti in cui design, 
            sviluppo e comunicazione lavorassero nella stessa direzione e avessero uno scopo preciso.
          </p>
          <div className="border-l-3 rounded-lg border-orange-gradient-start bg-[#14151A] p-6 mb-5">
            <p>
              <strong className="font-bold">Vetra Studio nasce così </strong>
              dalla voglia di creare, dalla passione per l'informatica e dalla scelta di affrontare insieme progetti in cui design, 
              sviluppo e comunicazione lavorano nella stessa direzione.
            </p>
          </div>
          <Link href="/contatti" className="inline-block border-2 p-4 rounded-lg border-orange-gradient-start cursor-pointer">
            Raccontaci la tua storia →
          </Link>
        </div>

        <div>
          {/* TODO-MERGE: sostituire con Image component dopo il merge */}
        </div>
      </div>

      {/* Il nostro modo di lavorare */}
      <div className="sm:grid sm:grid-cols-2 py-20 items-center border-b border-stroke-primary">
        <div>
          {/* TODO-MERGE: sostituire con Image component dopo il merge */}
        </div>

        <div>
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Il nostro modo di lavorare</h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">La collaborazione con il cliente è il cuore di ogni progetto.</h2>
          <p className="text-base mb-5">
            Lavoriamo a stretto contatto durante ogni fase del progetto, confrontandoci passo dopo passo per assicurarci che il risultato finale 
            corrisponda alle esigenze e rispecchi le aspettative. Partiamo da un primo confronto per comprendere la realtà dell’attività, 
            le sue necessità e gli obiettivi da raggiungere. Presentiamo quindi una prima proposta grafica insieme al preventivo, definendo 
            fin dall’inizio una direzione chiara e condivisa.
            <br/><br/>
            Durante lo sviluppo manteniamo un dialogo costante, condividendo scelte progettuali, tempistiche e stato di avanzamento. 
            Analizziamo il contesto dell’attività, il pubblico di riferimento e le esigenze specifiche del progetto, così da definire ogni 
            elemento in funzione delle necessità reali, dall’interfaccia all’architettura tecnica.
            <br/><br/>
            Curiamo con la stessa attenzione gli aspetti visivi e la qualità tecnica. Lavoriamo su interfacce intuitive e coerenti, prestazioni, 
            struttura e codice, con l’obiettivo di realizzare prodotti digitali piacevoli da vedere, efficienti e progettati per funzionare nel tempo.
          </p>
          <div className="border-l-3 rounded-lg border-orange-gradient-start bg-[#14151A] p-6 mb-5">
            <p>
              <strong className="font-bold">Lavoriamo così </strong>
              mettendo in relazione design, sviluppo e comunicazione, attraverso un confronto costante con il cliente e un'attenzione
              concreta alle esigenze di ogni progetto.
            </p>
          </div>
          <Link href="/servizi" className="inline-block border-2 p-4 rounded-lg border-orange-gradient-start cursor-pointer">
              Scopri i nostri servizi →
          </Link>
        </div>
      </div>

      {/* Tecnologie */}
      <div className="flex flex-col py-20 border-b border-stroke-primary">
        <div>
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Tecnologie</h1>
          <h2 className="text-3xl font-semibold mb-4">Scegliamo la tecnologia in base a ciò che serve.</h2>

          <p className="text-base mb-8">
            Non tutti i progetti hanno le stesse necessità. Prima capiamo cosa deve fare il sito, poi scegliamo lo strumento più adatto
            per costruire un'esperienza veloce, funzionale e pensata per durare nel tempo.
            <br/><br/>
            Valutiamo con attenzione complessità, gestione dei contenuti, personalizzazione e prestazioni, così da utilizzare la tecnologia
            che offre il miglior equilibrio tra ciò che il progetto richiede e ciò che il cliente vuole ottenere.
          </p>
        </div>

        <div className="w-0 min-w-full">
          <MarqueeTech />
        </div>
      </div>
      {/* Il team */}
      <div className="py-20 border-b border-stroke-primary">
        <div className="sm:grid sm:grid-cols-2 mb-12">
          <div>
            <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Il team</h1>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Ognuno ha un ruolo. Il progetto è uno solo.</h2>
            <p className="text-base">
              Le nostre competenze si completano attraverso ruoli distinti, così da poter dedicare attenzione ai diversi aspetti del progetto.
            </p>
          </div>
          <div>
            {/* TODO-MERGE: sostituire con Image component dopo il merge */}
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="sm:pb-2 pt-6 py-6 last:pb-0 sm:pr-4 sm:border-t sm:border-stroke-primary"
            >
              <h3 className="font-bold">
                {member.name} — {member.role}
              </h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* La nostra promessa */}
      <div className="py-15 gap-15 sm:px-25">
        <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">La nostra promessa</h1>
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Un progetto non è finito quando funziona. È finito quando risponde a ciò che serve.</h2>
        <p className="mb-8">
          Ci impegniamo a portare a termine il progetto nel miglior modo possibile e a intervenire non appena si presenta un problema. 
          Il nostro obiettivo è consegnare qualcosa che rispecchi le aspettative del cliente e che possa concretamente contribuire alla sua attività.
        </p>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 border-t border-stroke-primary sm:divide-x-1 sm:divide-stroke-primary">
          {principles.map((principle) => (
            <div key={principle.number} className="pb-2 pt-6 sm:pr-4 last:pb-0">
              <p className="font-extrabold text-orange-gradient-start">{principle.number}</p>
              <h3 className="font-bold">{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
