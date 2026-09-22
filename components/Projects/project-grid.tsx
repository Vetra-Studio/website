import { getCategories, getProjects } from '@/lib/supabase/queries';
import ProjectsGridClient from './projects-grid-client';

interface ProjectsGridProps {
  initialCount?: number;
  step?: number;
  className?: string;
}

export default async function ProjectsGrid({
  initialCount = 3,
  step = 3,
  className
}: ProjectsGridProps) {
  const [categories, projects] = await Promise.all([
    getCategories(),
    getProjects()
  ]);

  return (
    <ProjectsGridClient
      projects={projects}
      categories={categories}
      initialCount={initialCount}
      step={step}
      className={className}
    />
  );
}