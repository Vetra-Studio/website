// app/servizi/page.tsx
import ServiceDescription from "@/components/Services/service-description";
import Sculpture from "@/components/Services/sculpture";
import Choice from "@/components/Services/choice";
import FaqSection from "@/components/Services/faq-question";
import PricingPlans from "@/components/Services/pakets";
import OptionalServices from "@/components/Services/optionals";

export default function ServiziPage() {
  return (
    <main className="px-6 md:px-12 py-12 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Colonna Sinistra: Testi */}
        <ServiceDescription />

        {/* Colonna Destra: Grafica Logo con Sfocatura */}
        <div className="flex justify-center">
          <Sculpture />
        </div>

      </div>

      {/* Sezione Perché Scegliere Noi */}
      <Choice />

      {/* Sezione Prezzi */}
      <PricingPlans />

      {/* Servizi Aggiuntivi */}
      <OptionalServices />


      {/* Sezione FAQ */}
      <FaqSection />

    </main>
  );
}