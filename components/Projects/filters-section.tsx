'use client';

import SearchBar from './search-bar';
import CategoryMenu from './category-menu';
import SortButton from './sort-button';

export interface FilterOption {
  id: string;
  label: string;
}

export const CATEGORIES: FilterOption[] = [
  { id: 'all', label: 'Tutti i progetti' },
  { id: 'corporate', label: 'Siti aziendali' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'blog', label: 'Blog & Megazine' },
  { id: 'app', label: 'Web App' },
];

export const SORT_OPTIONS: FilterOption[] = [
  { id: 'recent', label: 'Più recenti' },
  { id: 'old', label: 'Meno recenti' },
];

interface ProjectFilterSectionProps {
  onCategoryChange?: (id: string) => void;
  onSortChange?: (option: FilterOption) => void;
}

export default function ProjectFilterSection({
  onCategoryChange,
  onSortChange,
}: ProjectFilterSectionProps) {
  return (
    <section className="">
      <SearchBar />

      <div className="flex w-full flex-col gap-5 
                      lg:flex-row lg:items-center lg:justify-between">
        <CategoryMenu
          categories={CATEGORIES}
          onSelectCategory={onCategoryChange}
        />

        <SortButton
          options={SORT_OPTIONS}
          onSelect={onSortChange}
        />
      </div>
    </section>
  );
}