'use client';

import SearchBar from './SearchBar';
import FiltersMenu from './CategoryMenu';
import type { Category } from '@/lib/supabase/queries';
import { FilterOption } from './CategoryMenu';

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
      <div>
        <FiltersMenu dateSortOptions={dateSortOptions} categories={categories} className="w-full" />
      </div>
    </section>
  );
}