'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SlotCard from './slot';
import LoadMoreButton from './load-more-button';
import type { Project } from '@/lib/supabase/queries';
import { searchParam } from './search-bar';
import { categoryParam } from './category-menu';
import { sortParam } from './sort-button';

interface ProjectsGridProps {
  initialCount?: number;
  step?: number;
  className?: string;
  projects: Project[];
  defaultCategory: string;
  defaultDateSortOption: string;
}

export default function ProjectsGrid({
  initialCount = 3,
  step = 3,
  className,
  projects,
  defaultCategory,
  defaultDateSortOption
}: ProjectsGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const searchParams = useSearchParams();

  const categorySlug = searchParams.get(categoryParam) ?? defaultCategory;
  const sortSlug = searchParams.get(sortParam) ?? defaultDateSortOption;
  const searchQuery = searchParams.get(searchParam) ?? '';

  const filteredAndSortedProjects = useMemo(() => {
    const byCategory =
      categorySlug === defaultCategory
        ? projects
        : projects.filter((project) => {
            console.log(project.title, project.category);
            return project.category.slug === categorySlug;
          });

    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered =
      normalizedQuery === ''
        ? byCategory
        : byCategory.filter((project) => {
            const haystack =
              `${project.title} ${project.description ?? ''}`.toLowerCase();

            return haystack.includes(normalizedQuery);
          });

    // creo una copia dei progetti filtrati e la visualizzo in base alla data
    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.release).getTime();
      const dateB = new Date(b.release).getTime();

      switch (sortSlug) {
        case 'old':
          return dateA - dateB;

        case 'recent':
        default:
          return dateB - dateA;
      }
    });

    return sorted;
  }, [projects, categorySlug, sortSlug, searchQuery]);

  const visibleProjects = filteredAndSortedProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  return (
    <section className={className}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {visibleProjects.map((project) => (
          <SlotCard
            key={project.id}
            category={project.category.name}
            release={project.release}
            title={project.title}
            description={project.description}
            slug={project.slug}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex w-full justify-center md:mt-14">
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </section>
  );
}