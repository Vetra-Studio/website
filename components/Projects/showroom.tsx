'use client';

import React, { useState } from 'react';
import SlotCard from './slot';
import LoadMoreButton from './load-more-button';

interface ProjectsGridProps {
  initialCount?: number;
  step?: number;
}

const mockProject = {
  category: 'E-Commerce',
  title: 'Nome Azienda / Progetto',
  description:
    'Descrizione dettagliata del progetto realizzato con tutte le caratteristiche principali.',
  imageSrc: '/path-to-image.jpg',
  href: '/progetti/nome-progetto',
};

export default function ProjectsGrid({
  initialCount = 3,
  step = 3,
}: ProjectsGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  // Genera l'array di progetti in base a quanti ne sono stati sbloccati
  const projects = Array.from({ length: visibleCount }, (_, index) => ({
    ...mockProject,
    id: `project-${index + 1}`,
    title: `${mockProject.title} ${index + 1}`,
  }));

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  return (
    <section className="mx-auto w-full max-w-[1850px] p-4">
      {/* Griglia 3 colonne */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project) => (
          <SlotCard
            key={project.id}
            category={project.category}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            href={project.href}
          />
        ))}
      </div>

      {/* Pulsante Carica Altri */}
      <div className="mt-10 flex w-full justify-center md:mt-14">
        <LoadMoreButton onClick={handleLoadMore} />
      </div>
    </section>
  );
}