import Image from "next/image";

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
    price: "€1000",
    originalPrice: "€1499",
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
  orange: "bg-[var(--color-orange-discount)]",
  blue: "bg-[var(--color-blue-discount)]",
  red: "bg-[var(--color-red-discount)]",
};

export default function PricingSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-background text-foreground">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent">
          Scegli il tuo Piano
        </h2>
        <p className="mt-3 text-[var(--color-light-gray-text)] text-lg">
          Trasparente, flessibile e senza costi nascosti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col justify-between p-8 rounded-2xl bg-panel-background border transition-all duration-300 ${
              plan.isPopular
                ? "border-orange-gradient-start shadow-lg shadow-orange-gradient-start/10 scale-105"
                : "border-stroke-primary"
            }`}
          >
            {plan.discountTag && (
              <span
                className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold text-white tracking-wider uppercase ${
                  badgeBgMap[plan.discountTag.variant]
                }`}
              >
                {plan.discountTag.label}
              </span>
            )}

            <div>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              
              {/* Sottotitolo */}
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-gradient-start mt-1 mb-3">
                {plan.subtitle}
              </p>

              <p className="text-sm text-light-gray-text mb-6 min-h-[40px]">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-light-gray-text">A partire da: </span>
                <span className="text-4xl font-extrabold text-green-text">
                    {plan.price}
                </span>
                {plan.originalPrice && (
                  <span className="ml-auto text-sm text-light-gray-text line-through">
                    {plan.originalPrice}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => {
                        const isDisabled = plan.includedCount !== undefined && idx >= plan.includedCount;

                        return (
                        <li 
                            key={idx} 
                            className={`flex items-center gap-3 text-sm ${isDisabled ? "opacity-50" : ""}`}
                        >
                            <img
                            src={isDisabled ? "/x-mark.svg" : "/tick-mark.svg"}
                            alt={isDisabled ? "Non incluso" : "Incluso"}
                            className="w-5 h-5 shrink-0"
                            />
                            <span className={isDisabled ? "line-through" : ""}>{feature}</span>
                        </li>
                        );
                    })}
                </ul>
            </div>

            <button className="w-full py-3 px-6 rounded-xl font-semibold transition-all border border-orange-btn-border-color bg-gradient-to-b from-orange-btn-gradient-start to-orange-btn-gradient-end hover:opacity-90 active:scale-[0.98]">
              {plan.ctaText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}