import WorksDescription from "@/components/Projects/description";
import Sculpture from "@/components/Icon";
import ProjectFilterSection from "@/components/Projects/selection-row";
import ProjectGrid from "@/components/Projects/showroom";


export default function ServiziPage() {
  return (
    <main className="px-6 md:px-12 py-12 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Colonna Sinistra: Testi */}
        <WorksDescription />

        {/* Colonna Destra: Grafica Logo con Sfocatura */}
        <div className="flex justify-center">
          <Sculpture />
        </div>

      </div>

        {/* Sezione Filtri e Pulsante */}
        <ProjectFilterSection />

        {/* Sezione Showroom */}
        <ProjectGrid />


    </main>
  );
}