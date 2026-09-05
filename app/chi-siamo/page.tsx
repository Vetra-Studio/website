import type { Metadata } from 'next'
import { MarqueeTech } from "@/components/ui/MarqueeTech"

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'Scopri Vetra Studio, il nostro approccio e il team che trasforma le idee in esperienze digitali.',
  alternates: {
    canonical: '/chi-siamo',
  },
}

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center font-mono scroll-smooth mx-25">

      {/* Hero */}
      <div className="grid grid-cols-2 py-15 gap-15 border-b border-stroke-primary">
        <div>
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Chi Siamo</h1>
          <h2 className="text-5xl font-semibold mb-6">Costruiamo il digitale partendo dalle persone.</h2>
          <p className="text-base mb-8">
            Siamo Vetra Studio, un team che progetta e sviluppa siti web su misura. Siamo partiti dalla voglia di metterci alla prova insieme,
            unendo competenze diverse per creare soluzioni in cui ogni parte, dal design al codice, abbia uno scopo preciso.
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-stroke-primary divide-x-1 divide-stroke-primary">
            <div className="pb-2 pt-6 pr-4">
              <h3 className="block font-bold">Su misura</h3>
              <p>Il progetto nasce dalle esigenze reali di chi lo commissiona.</p>
            </div>
            <div className="pb-2 pt-6 pr-4">
              <h3 className="block font-bold">Trasparenti</h3>
              <p>Condividiamo scelte, costi e avanzamento del progetto in tempo reale.</p>
            </div>
            <div className="pb-2 pt-6 pr-4">
              <h3 className="block font-bold">Qualità</h3>
              <p>Massimo impegno, cura di ogni dettaglio e un obiettivo comune: il tuo risultato.</p>
            </div>
          </div>
        </div>
        <div>
          {/* Image component for the about us image */}
        </div>
      </div>

      {/* Perche lo facciamo */}
      <div className="flex flex-col py-20 items-center border-b border-stroke-primary">
        <div className="w-5/8 text-center">
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Perché lo facciamo</h1>
          <h2 className="text-3xl font-semibold mb-4">Un sito deve avere un motivo per esistere.</h2>
          <p className="text-base mb-8">
            Non ci interessa realizzare una pagina che sia soltanto gradevole da vedere. Un sito non è solo una vetrina, 
            ma uno strumento che deve funzionare, comunicare e portare valore alla tua attività.
          </p>
        </div>
        {/* griglia 2x2 */}
        <div className="grid grid-cols-2">

          <div className="flex gap-4 pb-2 pt-6 pr-4">
            <div></div>
            <div>
              <h3 className="block font-bold">Più visibilità</h3>
              <p>Una presenza online curata permette a un'attività di raggiungere più utenti.</p>
            </div>
          </div>

          <div className="flex gap-4 pb-2 pt-6 pr-4">
            <div></div>
            <div>
              <h3 className="block font-bold">Più chiarezza</h3>
              <p>Struttura e contenuti devono rendere immediato capire chi sei, cosa offri e come contattarti.</p>
            </div>
          </div>

          <div className="flex gap-4 pb-2 pt-6 pr-4">
            <div></div>
            <div>
              <h3 className="block font-bold">Un'esperienza migliore</h3>
              <p>Prestazioni, responsive design e usabilità contribuiscono a rendere il sito efficace su ogni dispositivo.</p>
            </div>
          </div>
          
          <div className="flex gap-4 pb-2 pt-6 pr-4">
            <div></div>
            <div>
              <h3 className="block font-bold">Una storia unica</h3>
              <p>Ogni progetto ha un'anima propria che trasformiamo in un'identità digitale capace di rappresentarlo.</p>
            </div>
          </div>

        </div>
      </div>


      {/* la nostra storia */}
      <div className="grid grid-cols-2 py-20 items-center border-b border-stroke-primary">
        <div>
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">La nostra storia</h1>
          <h2 className="text-4xl font-semibold mb-4">Tutto è iniziato dalla voglia di metterci alla prova.</h2>
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
          <button className="">
            Raccontaci la tua storia →
          </button>
        </div>

        <div>
          {/* Image component */}
        </div>
      </div>

      {/* Il nostro modo di lavorare */}
      <div className="grid grid-cols-2 py-20 items-center border-b border-stroke-primary">
        <div>
          {/* Image component */}
        </div>

        <div>
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Il nostro modo di lavorare</h1>
          <h2 className="text-4xl font-semibold mb-4">La collaborazione con il cliente è il cuore di ogni progetto.</h2>
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
              <strong className="font-bold">Vetra Studio nasce così </strong>
              dalla voglia di creare, dalla passione per l'informatica e dalla scelta di affrontare insieme progetti in cui design, 
              sviluppo e comunicazione lavorano nella stessa direzione.
            </p>
          </div>
          <button className="">
            Scopri i nostri servizi →
          </button>
        </div>
      </div>

      {/* Tecnologie */}
      <div className="flex flex-col py-20 border-b border-stroke-primary">
        <div>
          <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">
            Tecnologie
          </h1>

          <h2 className="text-3xl font-semibold mb-4">
            Scegliamo la tecnologia in base a ciò che serve.
          </h2>

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
        <div className="grid grid-cols-2 mb-12">
          <div>
            <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">Il team</h1>
            <h2 className="text-4xl font-semibold mb-4">Ognuno ha un ruolo. Il progetto è uno solo.</h2>
            <p className="text-base">
              Le nostre competenze si completano attraverso ruoli distinti, così da poter dedicare attenzione ai diversi aspetti del progetto.
            </p>
          </div>
          <div>
            {/* Image component */}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="pb-2 pt-6 pr-4 border-t border-stroke-primary">
              <h3 className="block font-bold">Orso — Client Manager</h3>
              <p>Punto di riferimento per il cliente. Ascolta le esigenze iniziali, gestisce preventivi e aspetti amministrativi e garantisce massima trasparenza su tempi e costi.</p>
          </div>

          <div className="pb-2 pt-6 pr-4 border-t border-stroke-primary">
              <h3 className="block font-bold">Elia — Technical Lead</h3>
              <p>Definisce l'architettura del codice e le tecnologie da utilizzare, assicurando che il sito sia veloce, sicuro, ben strutturato e facile da aggiornare nel tempo.</p>
          </div>

          <div className="pb-2 pt-6 pr-4 border-t border-stroke-primary">
              <h3 className="block font-bold">Alfonso — UI/UX Designer</h3>
              <p>Progetta la struttura visiva e l'interfaccia delle pagine, creando un'esperienza di navigazione intuitiva, curata nei dettagli e coerente con la tua identità.</p>
          </div>

          <div className="pb-2 pt-6 pr-4 border-t border-stroke-primary">
              <h3 className="block font-bold">Sella — Web Developer</h3>
              <p>Trasforma i layout in codice, curando l'integrazione di tutte le funzionalità e verificando che il sito funzioni in modo fluido su ogni dispositivo.</p>
          </div>

          <div className="pb-2 pt-6 pr-4 border-t border-stroke-primary">
              <h3 className="block font-bold">Ricky — Project Manager</h3>
              <p>Organizza le fasi di lavoro del team, coordina le scadenze e fa in modo che ogni progetto proceda senza intoppi dalla prima bozza alla pubblicazione.</p>
          </div>

        </div>
      </div>

      {/* La nostra promessa */}
      <div className="py-15 gap-15 px-25">
        <h1 className="text-xs font-extrabold text-orange-gradient-start uppercase mb-3">La nostra promessa</h1>
        <h2 className="text-5xl font-semibold mb-6">Un progetto non è finito quando funziona. È finito quando risponde a ciò che serve.</h2>
        <p className="text-base mb-8">
          Ci impegniamo a portare a termine il progetto nel miglior modo possibile e a intervenire non appena si presenta un problema. 
          Il nostro obiettivo è consegnare qualcosa che rispecchi le aspettative del cliente e che possa concretamente contribuire alla sua attività.
        </p>

        <div className="grid grid-cols-3 gap-4 border-t border-stroke-primary divide-x-1 divide-stroke-primary">
          <div className="pb-2 pt-6 pr-4">
            <p className="font-extrabold text-orange-gradient-start">01</p>
            <h3 className="block font-bold">Struttura & Misurabilità</h3>
            <p>Lavoriamo su SEO, prestazioni e chiarezza per fare in modo che il sito sia facile da trovare e performante sui motori di ricerca.</p>
          </div>
          <div className="pb-2 pt-6 pr-4">
            <p className="font-extrabold text-orange-gradient-start">02</p>
            <h3 className="block font-bold">Esperienza Utente Chiara</h3>
            <p>Progettiamo ogni pagina affinché chi naviga trovi ciò che cerca in pochi secondi e possa contattarti senza ostacoli.</p>
          </div>
          <div className="pb-2 pt-6 pr-4">
            <p className="font-extrabold text-orange-gradient-start">03</p>
            <h3 className="block font-bold">Scelte Guidate dai Dati</h3>
            <p>Ogni intervento sul sito ha uno scopo preciso: analizziamo visite, conversioni e posizionamento per affinare il progetto nel tempo.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
