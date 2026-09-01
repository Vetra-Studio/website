import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nome Azienda',
  description: 'Informativa sulla privacy e gestione dei dati personali.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 md:py-16">
      <article className="flex flex-col gap-8 rounded-[20px] border border-stroke-primary bg-panel-background/35 p-6 backdrop-blur-md md:p-10">
        
        {/* Header */}
        <header className="border-b border-stroke-primary/50 pb-6">
          <h1 className="bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Informativa sulla Privacy
          </h1>
          <p className="mt-2 text-xs text-light-gray-text md:text-sm">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </header>

        {/* Contenuto Testuale */}
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-light-gray-text md:text-base">
          
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              1. Titolare del Trattamento dei Dati
            </h2>
            <p>
              Il Titolare del trattamento dei dati è <strong>[Nome Azienda / Ragione Sociale]</strong>, 
              con sede legale in [Indirizzo, Città], P.IVA [Numero P.IVA], 
              Email: <a href="mailto:info@esempio.it" className="text-orange-gradient-start underline">info@esempio.it</a>.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              2. Tipologia di Dati Raccolti
            </h2>
            <p>Raccogliamo diverse tipologie di informazioni per fornire e migliorare i nostri servizi:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Dati di navigazione:</strong> Indirizzi IP, orari di accesso, tipo di browser.</li>
              <li><strong>Dati forniti volontariamente:</strong> Nome, email e messaggi inviati tramite moduli di contatto.</li>
              <li><strong>Cookie e tracciamento:</strong> Preferenze di navigazione salvate nel browser.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              3. Finalità del Trattamento
            </h2>
            <p>I dati raccolti vengono utilizzati per:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Garantire il corretto funzionamento e la sicurezza del sito web.</li>
              <li>Rispondere alle richieste di informazioni o supporto.</li>
              <li>Analizzare in forma anonima le statistiche di traffico (previo consenso).</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              4. Gestione dei Cookie
            </h2>
            <p>
              Questo sito utilizza cookie tecnici (necessari) e, previo tuo consenso, cookie analitici e di profilazione. 
              Puoi modificare le tue preferenze in qualsiasi momento cliccando sul banner dei cookie o cancellando la memoria del tuo browser.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              5. Diritti dell’Utente (GDPR)
            </h2>
            <p>
              In conformità al Regolamento UE 2016/679 (GDPR), hai il diritto di accedere ai tuoi dati personali, chiederne la rettifica, la cancellazione o la limitazione del trattamento. 
              Per esercitare tali diritti puoi scriverci a: <a href="mailto:privacy@esempio.it" className="text-orange-gradient-start underline">privacy@esempio.it</a>.
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