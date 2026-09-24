'use client';

import SearchBar from './search-bar';
import CategoryMenu from './category-menu';
import SortButton from './sort-button';
import type { Category } from '@/lib/supabase/queries';
import { FilterOption } from '@/components/Projects/types';

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

      <div className="flex flex-col gap-3
                      md:flex-row md:items-center md:justify-between">

        <CategoryMenu categories={categories} />
        <SortButton dateSortOptions={dateSortOptions} />

      </div>
    </section>
  );
}