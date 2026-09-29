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
            Ultimo aggiornamento: 29/09/2026
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
              <li><strong>Dati forniti volontariamente:</strong> nome, indirizzo email e contenuto dei messaggi inviati ai nostri recapiti, oppure, tramite il modulo di contatto del sito, nome e cognome, email, numero di telefono (facoltativo), oggetto e messaggio.</li>
              <li><strong>Dati tecnici:</strong> indirizzo IP, data e ora della richiesta, pagina richiesta e tipo di browser, trattati dal fornitore di hosting per consegnare il sito.</li>
              <li><strong>Dati di verifica anti-spam:</strong> il modulo di contatto utilizza Cloudflare Turnstile, che genera un token di verifica per accertare che l&apos;invio non provenga da un sistema automatizzato; il token non contiene dati identificativi ulteriori rispetto a quelli tecnici già trattati dal fornitore di hosting.</li>
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
              <li>il <strong>legittimo interesse</strong> del titolare a erogare un sito funzionante e sicuro e a rispondere alle richieste (art. 6(1)(f) GDPR), inclusa la gestione delle richieste inviate tramite il modulo di contatto e la relativa verifica anti-spam.</li>
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
              I dati personali non vengono ceduti né conferiti a soggetti diversi dal titolare, né utilizzati a fini di marketing. I trattamenti a opera di soggetti distinti dal titolare sono limitati a quelli tecnici strettamente necessari al funzionamento del sito e del modulo di contatto, descritti di seguito.
            </p>
            <p>
              <strong>Hosting del sito.</strong> Il fornitore di hosting <strong>Cloudflare, Inc.</strong> tratta i dati tecnici delle richieste per consegnare le pagine del sito, come descritto nella{' '}
              <Link
                href="/cookie-policy"
                className="font-semibold text-orange-gradient-start underline underline-offset-4 hover:opacity-85"
              >
                Cookie Policy
              </Link>.
            </p>
            <p>
              <strong>Invio email dal modulo di contatto (Resend).</strong> Quando compili il modulo di contatto del sito, i dati inseriti (nome e cognome, email, telefono se fornito, oggetto e messaggio) vengono trasmessi tramite <strong>Resend</strong>, il servizio che invia il contenuto come email all&apos;indirizzo <strong>help@vetrastudio.org</strong>, impostando come indirizzo di risposta (&quot;reply-to&quot;) l&apos;email che hai indicato.
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li><strong>Finalità:</strong> recapitare al titolare la richiesta inviata tramite il modulo di contatto, consentendo di rispondere direttamente al mittente.</li>
              <li><strong>Base giuridica:</strong> esecuzione di una richiesta dell&apos;interessato e legittimo interesse del titolare a gestire le comunicazioni ricevute (art. 6(1)(b) e (f) GDPR).</li>
              <li><strong>Destinatario:</strong> Resend, in qualità di responsabile del trattamento (fornitore del servizio di invio email).</li>
              <li><strong>Trasferimento extra-UE:</strong> Resend è una società con sede negli Stati Uniti; il trattamento può quindi comportare un trasferimento di dati fuori dallo Spazio economico europeo. <span className="italic">[DA VERIFICARE: gli estremi esatti dell&apos;accordo sul trattamento dei dati (Data Processing Addendum) e le garanzie specifiche adottate da Resend per il trasferimento extra-UE non sono verificabili dal codice.]</span></li>
              <li><strong>Conservazione:</strong> <span className="italic">[DA VERIFICARE: la durata di conservazione dei dati lato Resend non è accertabile dal codice; il titolare conserva comunque il messaggio ricevuto secondo quanto indicato alla sezione 5.]</span></li>
            </ul>
            <p>
              La casella <strong>help@vetrastudio.org</strong> è un alias che instrada la posta, tramite Cloudflare Email Routing, verso una casella Gmail del titolare; anche in questo passaggio i dati restano trattati dai fornitori (Cloudflare e Google) come responsabili tecnici della consegna della posta.
            </p>
            <p>
              <strong>Verifica anti-spam (Cloudflare Turnstile).</strong> Il modulo di contatto utilizza <strong>Cloudflare Turnstile</strong> per distinguere le richieste umane da quelle automatizzate. Turnstile tratta dati tecnici minimi (equiparabili a quelli già descritti per l&apos;hosting) al solo fine di generare e verificare il token anti-spam; il trattamento è svolto da Cloudflare, Inc., già indicato come responsabile per l&apos;hosting.
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

