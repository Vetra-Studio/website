'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SlotCard from './slot';
import LoadMoreButton from './load-more-button';

interface ProjectsGridClientProps {
  projects: Awaited<ReturnType<typeof import('@/lib/supabase/queries').getProjects>>;
  categories: Awaited<ReturnType<typeof import('@/lib/supabase/queries').getCategories>>;
  initialCount?: number;
  step?: number;
  className?: string;
}

const DEFAULT_CATEGORY = 'all';
const DEFAULT_SORT = 'recent';

export default function ProjectsGridClient({
  projects,
  categories,
  initialCount = 3,
  step = 3,
  className
}: ProjectsGridClientProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const searchParams = useSearchParams();

  const categorySlug = searchParams.get('category') ?? DEFAULT_CATEGORY;
  const sortSlug = searchParams.get('sort') ?? DEFAULT_SORT;
  const searchQuery = searchParams.get('q') ?? '';

  const filteredAndSortedProjects = useMemo(() => {
    const byCategory =
      categorySlug === DEFAULT_CATEGORY
        ? projects
        : projects.filter(
            (project) => project.categories?.[0]?.slug === categorySlug
          );

    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered =
      normalizedQuery === ''
        ? byCategory
        : byCategory.filter((project) => {
            const haystack =
              `${project.title} ${project.description ?? ''}`.toLowerCase();

            return haystack.includes(normalizedQuery);
          });

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
            category={project.categories?.[0]?.name}
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