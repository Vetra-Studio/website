import { Check } from "lucide-react";
import Link from "next/link";

interface PricingPlan {
  name: string;
  scope: string;
  description: string;
  price: string;
  originalPrice?: string;
  discountTag?: {
    label: string;
  };
  includedFeatures: string[];
  isPopular?: boolean;
  ctaText: string;
}

const plans: PricingPlan[] = [
  {
    name: "Start",
    scope: "Sito vetrina · fino a 5 pagine, home compresa",
    description: "Il sito essenziale per farti trovare online",
    price: "599 €",
    originalPrice: "800 €",
    discountTag: { label: "-25%" },
    includedFeatures: [
      "Si adatta a telefono, tablet e computer",
      "Ideale se ti serve una presenza semplice e curata",
    ],
    ctaText: "Inizia Ora",
  },
  {
    name: "Top",
    scope: "Sito completo · fino a 10 pagine",
    description: "Il sito completo, seguito anche dopo la consegna.",
    price: "999 €",
    originalPrice: "1.500 €",
    discountTag: { label: "IL PIÙ COMPLETO -30%" },
    includedFeatures: [
      "Si adatta a telefono, tablet e computer",
      "Ideale per attività che cambiano spesso orari, menù, eventi o offerte",
      "Aggiornamenti dei contenuti inclusi per 6 mesi",
    ],
    isPopular: true,
    ctaText: "Attiva Top",
  },
  {
    name: "Deluxe",
    scope: "Sito con pagine senza limiti",
    description: "Il sito che lavora per te: prenotazioni, ordini, clienti fidelizzati.",
    price: "1.800 €",
    originalPrice: "3.000 €",
    discountTag: { label: "OFFERTA -40%" },
    includedFeatures: [
      "Si adatta a telefono, tablet e computer",
      "Prenotazioni o ordini online, con area riservata ai clienti",
      "Aggiornamenti dei contenuti inclusi per 12 mesi",
      "Email promozionali agli iscritti"
    ],
    ctaText: "Contattaci",
  },
];

const featuredPlanClassName = "pricing-plan--featured";

export default function PricingSection() {
  return (
    <section className="pricing-section mx-auto max-w-7xl space-y-10 px-4 py-16">
      {/* Intestazione Sezione */}
      <header className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="pricing-eyebrow">Soluzioni per il tuo progetto</p>
        <h2 className="mt-5 bg-gradient-to-r text-4xl font-bold tracking-tight text-gradient-orange sm:text-5xl">
          Piani e Prezzi
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-light-gray-text text-lg leading-relaxed">
          Scegli il pacchetto più adatto alla tua attività e confronta con chiarezza prezzi e contenuti inclusi.
        </p>
      </header>

      {/* Griglia Piani */}
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`pricing-plan ${plan.isPopular ? featuredPlanClassName : ''}`}
          >
            {plan.discountTag && (
              <span className={`plan-badge ${plan.isPopular ? "plan-badge--featured" : ""}`}>
                {plan.discountTag.label}
              </span>
            )}

            <div className="pricing-plan-content">
              <div className="pricing-plan-heading">
                <h3 className="pricing-plan-title">{plan.name}</h3>
                <p className="pricing-plan-scope">{plan.scope}</p>
                <p className="pricing-plan-description">
                  {plan.description}
                </p>
              </div>

              <div className="pricing-price-block">
                <span className="pricing-price-label">A partire da</span>
                <div className="pricing-price-row">
                  <span className="pricing-price">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="pricing-original-price">{plan.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="pricing-inclusions">
                <p className="pricing-inclusions-title">Il piano include</p>
                <ul className="pricing-feature-list">
                  {plan.includedFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="pricing-feature"
                    >
                      <span className="pricing-check">
                        <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.75} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottone d'azione */}
            <Link
              href="/contattaci"
              className={`plan-cta w-full px-6 py-3 font-semibold active:scale-[0.98] ${plan.isPopular ? "plan-cta--featured" : ""}`}
            >
              {plan.ctaText}
            </Link>
          </article>
        ))}
      </div>
      <div className="pricing-notes flex flex-col gap-2 text-sm leading-relaxed text-light-gray-text">
        <p className="max-w-xl">
          Prezzi promozionali di lancio, disponibili per un periodo limitato.
        </p>
        <p className="max-w-2xl">
          Il preventivo finale viene definito insieme, in base alle esigenze del progetto. È possibile valutare una soluzione personalizzata tra i piani.
        </p>
      </div>
    </section>
  );
}
