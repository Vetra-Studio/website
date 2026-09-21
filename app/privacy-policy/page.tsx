import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy di Vetra Studio: dati raccolti, finalità del trattamento, base giuridica e modalità di contatto.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto w-full max-w-4xl py-10 md:py-16">
      <article className="flex flex-col gap-8 p-6 md:p-10">
        
        {/* Header */}
        <header className="border-b border-stroke-primary/50 pb-6">
          <h1 className="bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Informativa sulla Privacy
          </h1>
          <p className="mt-2 text-xs text-light-gray-text md:text-sm">
            Ultimo aggiornamento: 21/09/2026
          </p>
        </header>

        {/* Contenuto Testuale */}
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-light-gray-text md:text-base">
          
          {/* 1. Titolare del trattamento */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              1. Titolare del trattamento dei dati
            </h2>
            <p>
              Il titolare del trattamento dei dati è <strong>Vetra Studio</strong>, attività svolta dal Sig. <strong>Riccardo Rossato</strong>, con sede in <strong>Via Papa Luciani 14, 36025 Noventa Vicentina (VI)</strong>.
            </p>
            <p>
              Recapiti:{' '}
              <a href="mailto:info@vetrastudio.org" className="text-orange-gradient-start underline">info@vetrastudio.org</a>
              {' '}|{' '}
              +39 327 352 0087.
            </p>
          </section>

          {/* 2. Tipologia di dati raccolti */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              2. Tipologia di dati raccolti
            </h2>
            <p>
              Il sito <strong>non utilizza cookie</strong> e non impiega strumenti di tracciamento, profilazione o statistica. I dati personali raccolti sono quindi limitati a:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Dati forniti volontariamente:</strong> nome, indirizzo email e contenuto dei messaggi inviati ai nostri recapiti.</li>
              <li><strong>Dati tecnici:</strong> indirizzo IP, data e ora della richiesta, pagina richiesta e tipo di browser, trattati dal fornitore di hosting per consegnare il sito.</li>
            </ul>
            <p className="mt-1">
              Per il dettaglio del trattamento tecnico, consulta la{' '}
              <Link
                href="/cookie-policy"
                className="font-semibold text-orange-gradient-start underline underline-offset-4 hover:opacity-85"
              >
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* 3. Finalità del trattamento */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              3. Finalità del trattamento
            </h2>
            <p>I dati raccolti vengono utilizzati esclusivamente per:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Rispondere alle tue richieste di informazioni, preventivi o supporto.</li>
              <li>Gestire la corrispondenza e le richieste a noi rivolte.</li>
              <li>Garantire il corretto funzionamento e la sicurezza del sito web.</li>
            </ul>
          </section>

          {/* 4. Base giuridica */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              4. Base giuridica del trattamento
            </h2>
            <p>
              In conformità al Regolamento (UE) 2016/679 (GDPR), il trattamento si fonda su:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>la <strong>richiesta stessa</strong> dell&apos;interessato, quando fornisci volontariamente i tuoi dati (art. 6(1)(b) GDPR);</li>
              <li>il <strong>legittimo interesse</strong> del titolare a erogare un sito funzionante e sicuro e a rispondere alle richieste (art. 6(1)(f) GDPR).</li>
            </ul>
            <p className="mt-1">
              Non viene richiesto alcun consenso: il sito non installa cookie, quindi non è presente alcun banner di consenso.
            </p>
          </section>

          {/* 5. Conservazione dei dati */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              5. Conservazione dei dati
            </h2>
            <p>
              I dati sono conservati solo per il periodo necessario alle finalità indicate. La corrispondenza viene mantenuta fino alla definizione della richiesta e successivamente eliminata o anonimizzata; non è previsto alcun archiviamento automatizzato.
            </p>
          </section>

          {/* 6. Cessione a terzi */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              6. Cessione a soggetti terzi
            </h2>
            <p>
              I dati personali non vengono ceduti né conferiti a soggetti diversi dal titolare, né utilizzati a fini di marketing. L&apos;unico trattamento a opera di un soggetto distinto è quello tecnico del fornitore di hosting <strong>Cloudflare, Inc.</strong>, descritto nella{' '}
              <Link
                href="/cookie-policy"
                className="font-semibold text-orange-gradient-start underline underline-offset-4 hover:opacity-85"
              >
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* 7. Diritti dell'utente */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              7. I tuoi diritti (GDPR)
            </h2>
            <p>
              In relazione ai dati personali trattati tramite questo sito puoi esercitare, nei limiti e alle condizioni previsti dagli articoli 15-22 del GDPR, il diritto di:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Accesso:</strong> per sapere quali dati che ti riguardano trattiamo;</li>
              <li><strong>Rettifica:</strong> per correggere dati inesatti o incompleti;</li>
              <li><strong>Cancellazione:</strong> nei casi previsti dalla normativa;</li>
              <li><strong>Limitazione:</strong> del trattamento;</li>
              <li><strong>Portabilità:</strong> dei dati;</li>
              <li><strong>Opposizione:</strong> al trattamento fondato sul legittimo interesse.</li>
            </ul>
            <p className="mt-1">
              Per esercitarli puoi scriverci a:{' '}
              <a href="mailto:info@vetrastudio.org" className="text-orange-gradient-start underline">info@vetrastudio.org</a>.
            </p>
            <p>
              Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (art. 77 GDPR), Piazza Venezia 11, 00187 Roma —{' '}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-gradient-start underline"
              >
                www.garanteprivacy.it
              </a>
              .
            </p>
          </section>

          {/* 8. Modifiche */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              8. Modifiche a questa informativa
            </h2>
            <p>
              Questa pagina può essere aggiornata quando cambiano gli strumenti utilizzati dal sito o la normativa applicabile. La data in cima indica l&apos;ultimo aggiornamento.
            </p>
          </section>

          {/* Cookie Policy Link */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Cookie Policy
            </h2>
            <p>
              Per il trattamento dei cookie e dei dati tecnici, consulta la nostra{' '}
              <Link
                href="/cookie-policy"
                className="font-semibold text-orange-gradient-start underline underline-offset-4 hover:opacity-85"
              >
                Cookie Policy
              </Link>.
            </p>
          </section>

        </div>

        {/* Footer della scheda */}
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-orange-gradient-start hover:underline"
          >
            ← Torna alla Home
          </Link>
        </div>

      </article>
    </main>
  );
}


