import type { Metadata } from 'next'
import Link from 'next/link'

import LegalPageLayout, { LegalSection } from '@/components/Legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie e sul trattamento dei dati tecnici da parte di Vetra Studio.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/cookie-policy',
  },
}

export default function CookiePolicy() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="21/09/2026">
          {/* In sintesi */}
          <section className="flex flex-col gap-2">
            <p>
              Questo sito <strong>non utilizza cookie</strong> e non impiega strumenti di tracciamento, profilazione o di statistica. Per questo motivo non è presente alcun banner di consenso: non c’è nulla da consentire, perché nessun cookie viene installato sul tuo dispositivo, né da noi né da terze parti.
            </p>
            <p className="text-xs text-light-gray-text">
              Restano comunque alcune informazioni tecniche trattate dal nostro fornitore di hosting per far funzionare il sito, descritte più sotto.
            </p>
          </section>

          {/* 1. Cosa sono i cookie */}
          <LegalSection title="1. Cosa sono i cookie">
            <p>
              I cookie sono piccoli file di testo che un sito salva sul dispositivo di chi lo visita, per far funzionare correttamente il sito o per raccogliere informazioni sul suo utilizzo. Esistono tecnologie simili — come il local storage del browser — che svolgono funzioni analoghe senza essere tecnicamente cookie.
            </p>
            <p>
              Questo sito non utilizza né cookie né tecnologie di questo tipo.
            </p>
          </LegalSection>

          {/* 2. Base normativa */}
          <LegalSection title="2. Base normativa">
            <p>
              La presente informativa è redatta in conformità al Regolamento (UE) 2016/679 (GDPR), alla Direttiva 2002/21/CE (ePrivacy) come recepita in Italia dal D.lgs. 196/2003 e dal D.lgs. 101/2018 (Codice Privacy), e alle Linee guida in materia di cookie del Garante per la protezione dei dati personali.
            </p>
          </LegalSection>

          {/* 3. Cookie utilizzati */}
          <LegalSection title="3. Cookie utilizzati da questo sito" className="flex flex-col gap-3">
            <p>
              Nessuno.
            </p>

            {/* Tabella Cookie */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stroke-primary/50 text-foreground">
                    <th className="py-2.5 px-3 font-semibold">Categoria</th>
                    <th className="py-2.5 px-3 font-semibold">Finalità</th>
                    <th className="py-2.5 px-3 font-semibold">Utilizzato su questo sito</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stroke-primary/20 text-light-gray-text">
                  <tr>
                    <td className="py-2.5 px-3">Cookie tecnici (essenziali)</td>
                    <td className="py-2.5 px-3">Consentono il funzionamento del sito</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Cookie funzionali</td>
                    <td className="py-2.5 px-3">Conservano preferenze e personalizzazioni</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Cookie analitici (statistiche)</td>
                    <td className="py-2.5 px-3">Raccogliono statistiche di utilizzo</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Cookie di profilazione o pubblicitari</td>
                    <td className="py-2.5 px-3">Misurano campagne e profili di navigazione</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Cookie di terze parti</td>
                    <td className="py-2.5 px-3">Tracciamento da parte di soggetti esterni</td>
                    <td className="py-2.5 px-3 font-semibold text-foreground">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Non utilizziamo Google Analytics, Google Ads, Meta Pixel, Facebook, Instagram, YouTube, Google Maps né altri strumenti di terze parti che installino cookie o raccoltino dati sulla tua navigazione.
            </p>
          </LegalSection>

          {/* 4. Profili social */}
          <LegalSection title="4. Collegamenti ai profili social">
            <p>
              I collegamenti ai nostri profili social presenti nel sito sono semplici link: non sono contenuti incorporati e non trasmettono alcun dato ai rispettivi gestori finché non decidi di cliccarli. Se li clicchi, sarà il sito di Destinazione a trattare i tuoi dati secondo la propria informativa, sulla quale non abbiamo controllo.
            </p>
          </LegalSection>

          {/* 5. Dati tecnici hosting */}
          <LegalSection title="5. Dati tecnici trattati dal fornitore di hosting">
            <p>
              Il sito è ospitato su <strong>Cloudflare, Inc.</strong>, tramite Cloudflare Workers. Come qualsiasi servizio di hosting, per consegnare le pagine e garantire la sicurezza del servizio Cloudflare tratta alcuni dati tecnici delle richieste, tra cui l’indirizzo IP del visitatore, la data e l’ora della richiesta, la pagina richiesta e il tipo di browser.
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li><strong>Finalità:</strong> erogazione del sito, sicurezza e prevenzione degli abusi, diagnostica dei malfunzionamenti.</li>
              <li><strong>Base giuridica:</strong> legittimo interesse del titolare a erogare un sito funzionante e sicuro (art. 6(1)(f) GDPR).</li>
              <li><strong>Destinatario:</strong> Cloudflare, Inc., in qualità di responsabile del trattamento.</li>
              <li><strong>Trasferimento extra-UE:</strong> Cloudflare, Inc. è una società con sede negli Stati Uniti. Il trattamento può quindi comportare un trasferimento di dati fuori dallo Spazio economico europeo, regolamentato dall’accordo sul trattamento dei dati (Data Processing Addendum) del fornitore e dalle garanzie ivi previste.</li>
              <li><strong>Conservazione:</strong> secondo le politiche di conservazione dei log del fornitore.</li>
            </ul>
            <p className="mt-1">
              Questo trattamento non dipende da cookie e non richiede il tuo consenso: avviene per il solo fatto tecnico di richiedere una pagina a un server, come accade su qualunque sito.
            </p>
          </LegalSection>

          {/* 6. Consenso */}
          <LegalSection title="6. Consenso e preferenze">
            <p>
              Poiché il sito non installa cookie, il consenso non è richiesto e non è presente alcun banner di consenso. Qualora in futuro venissero introdotti strumenti che richiedono consenso, ti sarà chiesto il consenso prima dell’inizio del trattamento, con un meccanismo che ti permetterà di accettare, rifiutare o modificare le tue preferenze in qualsiasi momento.
            </p>
          </LegalSection>

          {/* 7. Statistiche future */}
          <LegalSection title="7. Strumenti di statistica in futuro">
            <p>
              Al momento non ne usiamo. Se lo faremo, aggiornaremo questa pagina prima di attivarli, indicando quale strumento, quali dati raccoglie, per quali finalità e per quanto tempo — e, se lo strumento lo richiederà, introdurremo un sistema per accettare, rifiutare e modificare le tue preferenze.
            </p>
          </LegalSection>

          {/* 8. Gestione browser */}
          <LegalSection title="8. Come gestire i cookie dal browser">
            <p>
              Anche se questo sito non ne installa, puoi in qualsiasi momento bloccare o cancellare i cookie dalle impostazioni del tuo browser. Le istruzioni variano a seconda del browser che usi e si trovano nella sezione dedicata a privacy e sicurezza delle sue impostazioni.
            </p>
          </LegalSection>

          {/* 9. Diritti dell'utente */}
          <LegalSection title="9. I tuoi diritti (GDPR)">
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
              Per esercitarli puoi scrivere ai recapiti indicati nella sezione “Titolare del trattamento”.
            </p>
            <p>
              Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali, ai sensi dell’art. 77 GDPR, secondo le modalità indicate sul sito ufficiale {' '}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-gradient-start underline"
              >
                www.garanteprivacy.it
              </a>.
            </p>
          </LegalSection>

          {/* 10. Titolare del trattamento */}
          <LegalSection title="10. Titolare del trattamento">
            <p>
              <strong>Riccardo Rossato</strong>, in qualità di titolare del trattamento dei dati trattati tramite questo sito.
            </p>
            <p>
              Email di contatto:{' '}
              <a
                href="mailto:info@vetrastudio.org"
                className="text-orange-gradient-start underline"
              >
                info@vetrastudio.org
              </a>
            </p>
          </LegalSection>

          {/* 11. Modifiche */}
          <LegalSection title="11. Modifiche a questa informativa">
            <p>
              Questa pagina può essere aggiornata quando cambiano gli strumenti utilizzati dal sito o la normativa applicabile. La data in cima indica l’ultimo aggiornamento.
            </p>
          </LegalSection>

          {/* Informativa Privacy Link */}
          <LegalSection title="Informativa privacy">
            <p>
              Per il trattamento dei dati personali in generale, al di là dei cookie, consulta la nostra{' '}
              <Link
                href="/privacy-policy"
                className="font-semibold text-orange-gradient-start underline underline-offset-4 hover:opacity-85"
              >
                Privacy Policy
              </Link>.
            </p>
          </LegalSection>

    </LegalPageLayout>
  );
}


