'use client';

import SearchBar from './search-bar';
import CategoryMenu from './category-menu';
import SortButton from './sort-button';

interface FilterOption {
  id: string;
  label: string;
}

const categories: FilterOption[] = [
  { id: 'all', label: 'Tutti i progetti' },
  { id: 'corporate', label: 'Siti aziendali' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'blog', label: 'Blog & Megazine' },
  { id: 'app', label: 'Web App' },
];

const sortOptions: FilterOption[] = [
  { id: 'recent', label: 'Più recenti' },
  { id: 'old', label: 'Meno recenti' },
];

interface ProjectFilterSectionProps {
  onCategoryChange?: (id: string) => void;
  onSortChange?: (option: FilterOption) => void;
  className?: string;
}

export default function ProjectFilterSection({
  onCategoryChange,
  onSortChange,
  className
}: ProjectFilterSectionProps) {
  return (
    <section className={className}>
      <SearchBar />

      <div className="flex flex-col gap-3
                      md:flex-row md:items-center md:justify-between">
        <CategoryMenu
          categories={categories}
          onSelectCategory={onCategoryChange}
        />

        <SortButton
          options={sortOptions}
          onSelect={onSortChange}
        />
      </div>
    </section>
  );
}