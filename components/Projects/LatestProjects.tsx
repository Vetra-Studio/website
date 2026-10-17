import SlotCard from './SlotCard';
import type { Project } from '@/lib/supabase/queries';

interface LatestProjectsProps {
  projects: Project[];
}

export default function LatestProjects({
  projects,
}: LatestProjectsProps) {
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project) => (
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
    </section>
  );
}