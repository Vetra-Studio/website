import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  scope: string;
  description: string;
  price: string;
  originalPrice?: string;
  discountTag?: {
    label: string;
    variant: "orange" | "blue" | "red";
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
    discountTag: { label: "-25%", variant: "blue" },
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
    discountTag: { label: "IL PIÙ COMPLETO -30%", variant: "orange" },
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
    discountTag: { label: "OFFERTA -40%", variant: "red" },
    includedFeatures: [
      "Si adatta a telefono, tablet e computer",
      "Prenotazioni o ordini online, con area riservata ai clienti",
      "Aggiornamenti dei contenuti inclusi per 12 mesi",
      "Email promozionali agli iscritti"
    ],
    ctaText: "Contattaci",
  },
];

const badgeBgMap = {
  orange: "bg-orange-discount",
  blue: "bg-blue-discount",
  red: "bg-red-discount",
};

const planCardClassName = "relative flex flex-col justify-between rounded-2xl border bg-panel-background p-6 pt-8 sm:p-8 sm:pt-10";
const popularPlanClassName = "border-orange-gradient-start shadow-lg shadow-orange-gradient-start/10";
const standardPlanClassName = "border-stroke-primary";
const discountBadgeClassName = "absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white";

export default function PricingSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-16">
      {/* Intestazione Sezione */}
      <header className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-gradient-start">
          Soluzioni per il tuo progetto
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r text-gradient-orange">
          Piani e Prezzi
        </h2>
        <p className="mx-auto max-w-2xl text-light-gray-text text-lg leading-relaxed">
          Scegli il pacchetto più adatto alla tua attività e confronta con chiarezza prezzi e contenuti inclusi.
        </p>
      </header>

      {/* Griglia Piani */}
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`${planCardClassName} ${plan.isPopular ? popularPlanClassName : standardPlanClassName}`}
          >
            {plan.discountTag && (
              <span
                className={`${discountBadgeClassName} ${badgeBgMap[plan.discountTag.variant]}`}
              >
                {plan.discountTag.label}
              </span>
            )}

            <div className="space-y-6 mb-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-orange-gradient-start text-foreground">{plan.name}</h3>
                <p className="text-sm font-semibold text-foreground leading-relaxed">{plan.scope}</p>
                <p className="text-sm text-light-gray-text leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="border-y border-stroke-primary py-5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-light-gray-text">A partire da</span>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-4xl font-extrabold text-green-text">{plan.price}</span>
                  {plan.originalPrice && <span className="text-sm text-light-gray-text line-through">{plan.originalPrice}</span>}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-light-gray-text">
                  Il piano include
                </p>
                <ul className="space-y-4">
                  {plan.includedFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-text"
                        strokeWidth={2.5}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottone d'azione */}
            <button
              type="button"
              className="btn-transparent-gradient-orange w-full rounded-xl px-6 py-3 font-semibold transition-transform hover:opacity-90 active:scale-[0.98]"
            >
              {plan.ctaText}
            </button>
          </article>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-t border-stroke-primary pt-6 text-sm leading-relaxed text-light-gray-text">
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
