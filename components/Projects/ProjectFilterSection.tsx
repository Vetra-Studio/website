'use client';

import SearchBar from './SearchBar';
import FiltersMenu from './CategoryMenu';
import type { Category } from '@/lib/supabase/queries';
import type { FilterOption } from '@/lib/project-filters';

interface ProjectFilterSectionProps {
  categories: Category[];
  className?: string;
  dateSortOptions: FilterOption[];
}

export default function ProjectFilterSection({
  categories,
  dateSortOptions,
  className
}: ProjectFilterSectionProps) {
  return (
    <section className={className}>
      <SearchBar />
      <FiltersMenu dateSortOptions={dateSortOptions} categories={categories} className="w-full" />
    </section>
  );
}
