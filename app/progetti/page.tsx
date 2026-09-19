
import Icon from "@/components/Icon";
import ProjectFilterSection from "@/components/Projects/filters-section";
import ProjectGrid from "@/components/Projects/project-grid";

// px-6 md:px-12 py-12 max-w-7xl

export default function ServiziPage({
  title = "I nostri lavori",
  description = "Una selezione dei siti web che abbiamo realizzato per i nostri clienti, con un focus sulla qualità del design e dell'esperienza utente."
}
) {
  return (
    <main className="flex flex-col items-center justify-center">

      <div className="grid 
                        grid-cols-1 lg:grid-cols-2 
                        gap-12 
                        items-center
                        px-6 md:px-12 py-12 
                        max-w-7xl
                        
                        ">

        {/* Colonna Sinistra: Testi */}
        <div className="flex 
                          flex-col 
                          gap-4">

          {/* Sottotitolo / Titolo Sezione con gradiente arancione */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl 
                            font-bold 
                            text-gradient-orange  
                            leading-tight tracking-tight">
            {title}
          </h2>

          {/* Descrizione grigia */}
          <p className="text-lg sm:text-xl md:text-2xl 
                            text-light-gray-text 
                            leading-relaxed">
            {description}
          </p>
        </div>

        {/* Colonna Destra: Grafica Logo con Sfocatura */}
        <div className="flex justify-center">
          <Icon />
        </div>

      </div>

      {/* Sezione Filtri e Pulsante */}
      <div className="w-full px-6 md:px-12 
                      max-w-7xl">

        <ProjectFilterSection />
      </div>

      {/* Sezione Showroom */}
      <div className="w-full px-6 md:px-12 py-6
                      max-w-7xl">

        <ProjectGrid
          initialCount={3} step={3} />
      </div>





    </main>
  );
}