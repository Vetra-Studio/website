'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SlotCard from './slot';
import LoadMoreButton from './load-more-button';

interface ProjectsGridProps {
  initialCount?: number;
  step?: number;
}

const DEFAULT_CATEGORY = 'all';
const DEFAULT_SORT = 'recent';

const CATEGORY_MAP: Record<string, string> = {
  'corporate': 'Siti aziendali',
  'ecommerce': 'E-Commerce',
  'landing': 'Landing page',
  'blog': 'Blog & Megazine',
  'app': 'Web App',
};

// Mock: genera date di rilascio diverse per poter testare l'ordinamento
const mockProjects = [
  {
    id: 'project-1',
    category: 'Siti aziendali',
    relese: new Date(2024, 0, 15),
    title: 'Nome Azienda / Progetto 1',
    description: '...',
    imageSrc: '/path-to-image.jpg',
    href: '/progetti/nome-progetto-1',
  },
  {
    id: 'project-2',
    category: 'E-Commerce',
    relese: new Date(2024, 1, 1),
    title: 'Nome Azienda / Progetto 2',
    description: '...',
    imageSrc: '/path-to-image.jpg',
    href: '/progetti/nome-progetto-2',
  },
  {
    id: 'project-3',
    category: 'Blog & Megazine',
    relese: new Date(2024, 1, 20),
    title: 'Nome Azienda / Progetto 3',
    description: '...',
    imageSrc: '/path-to-image.jpg',
    href: '/progetti/nome-progetto-3',
  },
];

export default function ProjectsGrid({
  initialCount = 3,
  step = 3,
}: ProjectsGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const searchParams = useSearchParams();

  // Valori letti dall'URL, con i default richiesti se assenti
  const categorySlug = searchParams.get('category') ?? DEFAULT_CATEGORY;
  const sortSlug = searchParams.get('sort') ?? DEFAULT_SORT;
  const searchQuery = searchParams.get('q') ?? '';

  const filteredAndSortedProjects = useMemo(() => {
    const category =
      categorySlug === DEFAULT_CATEGORY
        ? DEFAULT_CATEGORY
        : (CATEGORY_MAP[categorySlug] ?? DEFAULT_CATEGORY);

    const byCategory =
      category === DEFAULT_CATEGORY
        ? mockProjects
        : mockProjects.filter((project) => project.category === category);

    // Filtro di ricerca testuale in base al parametro "b" dell'URL
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filtered =
      normalizedQuery === ''
        ? byCategory
        : byCategory.filter((project) => {
            const haystack = `${project.title} ${project.description}`.toLowerCase();
            return haystack.includes(normalizedQuery);
          });

    // Comparatore per il criterio di ordinamento scelto (usa direttamente lo slug dell'URL)
    const compareBySort = (a: (typeof mockProjects)[number], b: (typeof mockProjects)[number]) => {
      switch (sortSlug) {
        case 'recent':
          return b.relese.getTime() - a.relese.getTime();
        case 'old':
          return a.relese.getTime() - b.relese.getTime();
        default:
          return b.relese.getTime() - a.relese.getTime(); // fallback: più recente
      }
    };

    const sorted = [...filtered].sort((a, b) => {
      if (category === DEFAULT_CATEGORY) {
        return compareBySort(a, b);
      }

      const categoryCompare = a.category.localeCompare(b.category);
      if (categoryCompare !== 0) return categoryCompare;

      return compareBySort(a, b);
    });

    return sorted;
  }, [categorySlug, sortSlug, searchQuery]);

  // Applica il limite di schede visibili
  const projects = filteredAndSortedProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  return (
    <section className="mx-auto w-full max-w-screen-2xl p-4">
      {/* Griglia 3 colonne */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project) => (
          <SlotCard
            key={project.id}
            category={project.category}
            relese={project.relese}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            href={project.href}
          />
        ))}
      </div>

      {/* Pulsante Carica Altri */}
      {hasMore && (
        <div className="mt-10 flex w-full justify-center md:mt-14">
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </section>
  );
}