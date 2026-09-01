

import { CategoryBar, Category } from './category-bar';
import  RecentFilter  from './recent-button';

interface ProjectFilterSectionProps {
  categories?: Category[];
  onCategoryChange?: (id: string) => void;
  onRecentClick?: () => void;
}

export default function ProjectFilterSection({
  categories,
  onCategoryChange,
  onRecentClick,
}: ProjectFilterSectionProps) {
  return (
    <section className="flex w-full max-w-[1850px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      {/* Lista Filtri Categorie */}
      <CategoryBar
        categories={categories}
        onSelectCategory={onCategoryChange}
      />

      {/* Pulsante Separato */}
      <RecentFilter  />
    </section>
  );
}