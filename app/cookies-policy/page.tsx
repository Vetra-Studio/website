import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | VETRA Studio',
  description: 'Informativa sull’utilizzo dei cookie e strumenti di tracciamento.',
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 md:py-16">
      <article className="flex flex-col gap-8 rounded-[20px] border border-stroke-primary bg-panel-background/35 p-6 backdrop-blur-md md:p-10">
        
        {/* Header */}
        <header className="border-b border-stroke-primary/50 pb-6">
          <h1 className="bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-2 text-xs text-light-gray-text md:text-sm">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </header>

        {/* Contenuto Testuale */}
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-light-gray-text md:text-base">
          
          {/* In breve */}
          <section className="flex flex-col gap-2 rounded-[12px] border border-stroke-primary/40 bg-background/40 p-4">
            <p>
              Questo sito <strong>non utilizza cookie</strong> e non impiega strumenti di tracciamento o di statistica. Non è presente alcun banner di consenso perché non c’è nulla da consentire: nessun cookie viene installato sul tuo dispositivo, né da noi né da terze parti.
            </p>
            <p className="text-xs text-light-gray-text">
              Restano comunque alcune informazioni tecniche trattate dal nostro fornitore di hosting per far funzionare il sito, descritte più sotto.
            </p>
          </section>

          {/* Cosa sono i cookie */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che un sito salva sul dispositivo di chi lo visita, per farlo funzionare correttamente o per raccogliere informazioni sul suo utilizzo. Esistono tecnologie simili — come il local storage del browser — che svolgono funzioni analoghe senza essere tecnicamente cookie.
            </p>
            <p>
              Questo sito non usa né gli uni né le altre.
            </p>
          </section>

          {/* Cookie utilizzati */}
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Cookie utilizzati da questo sito
            </h2>
            <p>
              Nessuno.
            </p>

            {/* Tabella Cookie */}
            <div className="overflow-x-auto rounded-[12px] border border-stroke-primary/40 bg-background/30 p-2">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stroke-primary/50 text-foreground">
                    <th className="py-2.5 px-3 font-semibold">Tipo di cookie</th>
                    <th className="py-2.5 px-3 font-semibold">Presente su questo sito</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stroke-primary/20 text-light-gray-text">
                  <tr>
                    <td className="py-2.5 px-3">Cookie tecnici necessari</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Cookie analitici (statistiche)</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Cookie di profilazione o pubblicitari</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Cookie di terze parti</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Non utilizziamo Google Analytics, Google Ads, Meta Pixel, Facebook, Instagram, YouTube, Google Maps né altri strumenti di terze parti che installino cookie o raccolgano dati sulla tua navigazione.
            </p>
            <p>
              I collegamenti ai nostri profili social presenti nel sito sono semplici link: non sono contenuti incorporati e non trasmettono alcun dato ai rispettivi gestori finché non decidi di cliccarli. Se li clicchi, sarà il sito di destinazione a trattare i tuoi dati secondo la propria informativa, sulla quale non abbiamo controllo.
            </p>
          </section>

          {/* Dati tecnici hosting */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Dati tecnici trattati dall'hosting
            </h2>
            <p>
              Il sito è ospitato su <strong>Cloudflare, Inc.</strong>, tramite Cloudflare Workers. Come qualsiasi servizio di hosting, per consegnare le pagine e garantire la sicurezza del servizio Cloudflare tratta alcuni dati tecnici delle richieste, tra cui l'indirizzo IP del visitatore, la data e l'ora della richiesta, la pagina richiesta e il tipo di browser.
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li><strong>Finalità:</strong> erogazione del sito, sicurezza e prevenzione degli abusi, diagnostica dei malfunzionamenti.</li>
              <li><strong>Base giuridica:</strong> legittimo interesse del titolare a erogare un sito funzionante e sicuro (art. 6(1)(f) GDPR).</li>
              <li><strong>Destinatario:</strong> Cloudflare, Inc., in qualità di responsabile del trattamento.</li>
              <li><strong>Trasferimento extra-UE:</strong> Cloudflare, Inc. è una società con sede negli Stati Uniti. Il trattamento può quindi comportare un trasferimento di dati fuori dallo Spazio economico europeo, regolato dall'accordo sul trattamento dei dati (Data Processing Addendum) del fornitore e dalle garanzie ivi previste.</li>
              <li><strong>Conservazione:</strong> secondo le politiche di conservazione dei log del fornitore.</li>
            </ul>
            <p className="mt-1">
              Questo trattamento non dipende da cookie e non richiede il tuo consenso: avviene per il solo fatto tecnico di richiedere una pagina a un server, come accade su qualunque sito.
            </p>
          </section>

          {/* Statistiche future */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Se in futuro introdurremo strumenti di statistica
            </h2>
            <p>
              Al momento non ne usiamo. Se lo faremo, aggiorneremo questa pagina prima di attivarli, indicando quale strumento, quali dati raccoglie, per quali finalità e per quanto tempo — e, se lo strumento lo richiederà, introdurremo un sistema per accettare, rifiutare e modificare le tue preferenze.
            </p>
          </section>

          {/* Gestione browser */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Come gestire i cookie dal browser
            </h2>
            <p>
              Anche se questo sito non ne installa, puoi in qualsiasi momento bloccare o cancellare i cookie dalle impostazioni del tuo browser. Le istruzioni variano a seconda del browser che usi e si trovano nella sezione dedicata a privacy e sicurezza delle sue impostazioni.
            </p>
          </section>

          {/* Diritti dell'utente */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              I tuoi diritti
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
              Per esercitarli puoi scrivere ai recapiti indicati nella sezione "Titolare del trattamento".
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
              </a>.
            </p>
          </section>

          {/* Titolare del trattamento */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Titolare del trattamento
            </h2>
            <p>
              <strong>Riccardo Rossato</strong>, in qualità di titolare del trattamento dei dati raccolti tramite questo sito.
            </p>
            <p>
              Indirizzo: [indirizzo di residenza o domicilio]<br />
              Email di contatto:{' '}
              <a
                href="mailto:info@vetrastudio.org"
                className="text-orange-gradient-start underline"
              >
                info@vetrastudio.org
              </a>
            </p>
          </section>

          {/* Modifiche */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Modifiche a questa informativa
            </h2>
            <p>
              Questa pagina può essere aggiornata quando cambiano gli strumenti utilizzati dal sito o la normativa applicabile. La data in cima indica l'ultimo aggiornamento.
            </p>
          </section>

          {/* Informativa Privacy Link */}
          <section className="flex flex-col gap-2 border-t border-stroke-primary/40 pt-4">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              Informativa privacy
            </h2>
            <p>
              Per il trattamento dei dati personali in generale, al di là dei cookie, consulta la nostra{' '}
              <Link
                href="/privacy-policy"
                className="font-semibold text-orange-gradient-start underline underline-offset-4 hover:opacity-85"
              >
                Privacy Policy
              </Link>.
            </p>
          </section>

        </div>

        {/* Footer della scheda */}
        <footer className="border-t border-stroke-primary/50 pt-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-orange-gradient-start hover:underline"
          >
            ← Torna alla Home
          </Link>
        </footer>

      </article>
    </main>
  );
}