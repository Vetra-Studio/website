interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
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
    id: "basic",
    name: "Starter",
    subtitle: "Sito vetrina basico",
    description: "Per chi parte e vuole una presenza online solida",
    price: "€599",
    originalPrice: "€800",
    discountTag: { label: "-25%", variant: "blue" },
    features: [
        "UI/UX design personalizzato", 
        "Sviluppo front-end responsive", 
        "Ottimizzazione SEO di base",
        "Deploy e configurazione dominio",
        "Fino a 5 pagine statiche",
        "Aggiornamenti inclusi",
        "Email promozzionali",
        "Sviluppo back-end avanzato",
        "Area clienti personalizzata",
        "Pagamento in app"
    ],
    includedCount: 5,
    ctaText: "Inizia Ora",
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: "Sito vetrina avanzato",
    description: "Per aziende che vogliono distinguersi e crescere online",
    price: "€999",
    originalPrice: "€1500",
    discountTag: { label: "POPOLARE -30%", variant: "orange" },
    features: [
      "UI/UX design personalizzato", 
        "Sviluppo front-end responsive", 
        "Ottimizzazione SEO di base",
        "Deploy e configurazione dominio",
        "Fino a 5 pagine statiche",
        "Aggiornamenti inclusi",
        "Email promozzionali",
        "Sviluppo back-end avanzato",
        "Area clienti personalizzata",
        "Pagamento in app"
    ],
    includedCount: 6, 
    isPopular: true,
    ctaText: "Attiva Pro",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "Web App su misura",
    description: "Soluzione su misura per grandi aziende e volumi elevati.",
    price: "€1800",
    originalPrice: "€3000",
    discountTag: { label: "OFFERTA -40%", variant: "red" },
    features: [
     "UI/UX design personalizzato", 
        "Sviluppo front-end responsive", 
        "Ottimizzazione SEO di base",
        "Deploy e configurazione dominio",
        "Fino a 5 pagine statiche",
        "Aggiornamenti inclusi",
        "Email promozzionali",
        "Sviluppo back-end avanzato",
        "Area clienti personalizzata",
        "Pagamento in app"
    ],
    includedCount: 10,
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
                      bg-gradient-to-r from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent"
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
            key={plan.id}
            className={`relative flex flex-col justify-between 
                        p-8 
                        border rounded-2xl 
                        bg-panel-background  
                        transition-all duration-300 ${
              plan.isPopular
                ? "border-orange-gradient-start shadow-lg shadow-orange-gradient-start/10 md:-translate-y-2"
                : "border-stroke-primary"
            }`}
          >
            {plan.discountTag && (
              <span
                className={`absolute -top-3 right-6 
                            px-3 py-1 
                            rounded-full 
                            text-xs font-bold text-white tracking-wider uppercase ${
                  badgeBgMap[plan.discountTag.variant]
                }`}
              >
                {plan.discountTag.label}
              </span>
            )}

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-2xl font-bold text-foreground">{plan.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-gradient-start mt-1">
                  {plan.subtitle}
                </p>
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
                      className={`flex items-center gap-3 text-sm ${
                        isDisabled ? "opacity-50 line-through" : ""
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
                         bg-gradient-to-b from-orange-btn-gradient-start to-orange-btn-gradient-end 
                         border border-orange-btn-border-color rounded-xl
                         hover:opacity-90 active:scale-[0.98] transition-transform"
            >
              {plan.ctaText}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}