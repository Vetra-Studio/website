import { Suspense } from 'react';
import Icon from "@/components/Icon";
import ProjectFilterSection from "@/components/Projects/filters-section";
import ProjectGrid from "@/components/Projects/project-grid";
import { getCategories, getProjects } from '@/lib/supabase/queries';
import { FilterOption } from '@/components/Projects/types';


export default async function ProjectsPage() {
  const dbCategories = await getCategories();
  const categories = [
    { slug: 'all', name: 'Tutti i progetti' },
    ...dbCategories,
  ];

  const dateSortOptions: FilterOption[] = [
    { slug: 'recent', name: 'Più recenti' },
    { slug: 'old', name: 'Meno recenti' },
  ];

  const dbProjects = await getProjects();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="md:w-5/6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center
                        gap-12 px-6 md:px-12 py-12">

          {/* Colonna Sinistra: Testi */}
          <div className="flex 
                          flex-col 
                          gap-4">

            {/* Sottotitolo / Titolo Sezione con gradiente arancione */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl 
                           font-bold 
                           text-gradient-orange  
                           leading-tight tracking-tight">
              I nostri lavori
            </h2>

            {/* Descrizione grigia */}
            <p className="text-lg sm:text-xl md:text-2xl 
                          text-light-gray-text 
                          leading-relaxed">
              Una selezione dei siti web che abbiamo realizzato per i nostri clienti, con un focus sulla qualità del design e dell'esperienza utente.
            </p>
          </div>

          {/* Colonna Destra: Grafica Logo con Sfocatura */}
          <div className="flex justify-center">
            <Icon />
          </div>

        </div>

        {/* Sezione Filtri e Pulsante */}
        <Suspense fallback={null}>
          <ProjectFilterSection categories={categories} dateSortOptions={dateSortOptions} className="p-6 md:px-12" />
          
          <ProjectGrid projects={dbProjects} defaultCategory={categories[0].slug} defaultDateSortOption={dateSortOptions[0].slug} className="p-6 md:px-12" />
        </Suspense>
      </div>
    </main>
  );
}