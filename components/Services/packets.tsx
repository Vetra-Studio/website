interface PricingPlan {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discountTag?: {
    label: string;
    variant: "orange" | "blue" | "red";
  };
  features: string[];
  includedCount?: number;
  isPopular?: boolean;
  ctaText: string;
}

const plans: PricingPlan[] = [
  {
    name: "Start",
    description: "Il sito essenziale per farti trovare online",
    price: "€599",
    originalPrice: "€800",
    discountTag: { label: "-25%", variant: "blue" },
    features: [
      "Sito vetrina fino a 5 pagine",
      "Si adatta a telefono, tablet e computer",
      "Ideale se ti serve una presenza semplice e curata",
      "Aggiornamenti dei contenuti inclusi per 6 mesi",
      "Email promozionali agli iscritti"
    ],
    includedCount: 3,
    ctaText: "Inizia Ora",
  },
  {
    name: "Top",
    description: "Il sito completo, seguito anche dopo la consegna.",
    price: "€1000",
    originalPrice: "€1500",
    discountTag: { label: "IL PIÙ COMPLETO -30%", variant: "orange" },
    features: [
      "Fino a 10 pagine",
      "Si adatta a telefono, tablet e computer",
      "Ideale per attività che cambiano spesso orari, menù, eventi o offerte",
      "Aggiornamenti dei contenuti inclusi per 6 mesi",
      "Email promozionali agli iscritti"
    ],
    includedCount: 4,
    isPopular: true,
    ctaText: "Attiva Top",
  },
  {
    name: "Deluxe",
    description: "Il sito che lavora per te: prenotazioni, ordini, clienti fidelizzati.",
    price: "€1800",
    originalPrice: "€3000",
    discountTag: { label: "OFFERTA -40%", variant: "red" },
    features: [
      "Pagine senza limiti",
      "Si adatta a telefono, tablet e computer",
      "Prenotazioni o ordini online, con area riservata ai clienti",
      "Aggiornamenti dei contenuti inclusi per 12 mesi",
      "Email promozionali agli iscritti"
    ],
    includedCount: 5,
    ctaText: "Contattaci",
  },
];

const badgeBgMap = {
  orange: "bg-orange-discount",
  blue: "bg-blue-discount",
  red: "bg-red-discount",
};

export default function PricingSection() {
  return (
    <section className="max-w-7xl 
                        mx-auto 
                        px-4 py-16 space-y-12"
    >
      {/* Intestazione Sezione */}
      <header className="text-center space-y-3">
        <p className="text-4xl font-bold tracking-tight 
                      bg-gradient-to-r text-gradient-orange"
        >
          Scegli il tuo Piano
        </p>
        <p className="text-light-gray-text text-lg">
          Trasparente, flessibile e senza costi nascosti.
        </p>
      </header>

      {/* Griglia Piani */}
      <div className="grid 
                      grid-cols-1 md:grid-cols-3 
                      gap-8 items-stretch"
      >
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex flex-col justify-between 
                        p-8 
                        border rounded-2xl 
                        bg-panel-background  
                        ${plan.isPopular
                ? "border-orange-gradient-start md:-translate-y-2"
                : "border-stroke-primary"
              }`}
          >
            {plan.discountTag && (
              <span
                className={`absolute -top-3 right-6 
                            px-3 py-1 
                            rounded-full 
                            text-xs font-bold text-white tracking-wider uppercase ${badgeBgMap[plan.discountTag.variant]
                  }`}
              >
                {plan.discountTag.label}
              </span>
            )}

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-2xl font-bold text-foreground text-orange-gradient-start">{plan.name}</p>
              </div>

              <p className="text-sm text-light-gray-text min-h-[40px]">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-2 pt-2">
                <span className="text-sm text-light-gray-text">A partire da:</span>
                <span className="text-4xl font-extrabold text-green-text">
                  {plan.price}
                </span>
                {plan.originalPrice && (
                  <span className="ml-auto text-sm text-light-gray-text line-through">
                    {plan.originalPrice}
                  </span>
                )}
              </div>

              {/* Lista Caratteristiche */}
              <ul className="space-y-3 pt-4">
                {plan.features.map((feature, idx) => {
                  const isDisabled =
                    plan.includedCount !== undefined && idx >= plan.includedCount;

                  return (
                    <li
                      key={idx}
                      className={`flex items-center gap-3 text-sm ${isDisabled ? "opacity-50 line-through" : ""
                        }`}
                    >
                      <img
                        src={isDisabled ? "/x-mark.svg" : "/tick-mark.svg"}
                        alt=""
                        aria-hidden="true"
                        className="w-5 h-5 shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottone d'azione */}
            <button
              type="button"
              className="w-full 
                         py-3 px-6 
                         font-semibold
                         rounded-xl btn-transparent-gradient-orange
                         hover:opacity-90 active:scale-[0.98] transition-transform"
            >
              {plan.ctaText}
            </button>
          </article>
        ))}
      </div>
      <div>
        <p className="text-left text-light-gray-text text-sm">
          Prezzi promozionali di lancio, per un periodo limitato. <br/> Ogni progetto parte da una chiacchierata: il preventivo finale dipende da ciò che ti serve davvero, e si possono trovare soluzioni a metà strada. <br/> Assistenza oltre il periodo incluso: 400 € l'anno.
        </p>
      </div>
    </section>
  );
}