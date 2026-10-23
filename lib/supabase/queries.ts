import { supabasePublic } from '@/lib/supabase/public';

const log = process.env.NODE_ENV === 'production'
  ? console.error
  : console.warn;

export async function getCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabasePublic
      .from('categories')
      .select('name, slug')
      .order('name', { ascending: true });

    if (error) {
      log('Error fetching categories:', error.message);
      return [];
    }

    return data ?? [];
  } catch (error) {
    log('Unexpected error fetching categories:', error);
    return [];
  }
}

export interface Category {
  name: string;
  slug: string;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabasePublic
      .from('projects')
      .select(`
        id,
        title,
        description,
        release,
        slug,
        category_id,
        category:categories!projects_category_id_fkey (
          id,
          name,
          slug
        )
      `)
      .order('release', { ascending: false });
    
    if (error) {
      log('Error fetching projects:', error.message);
      return [];
    }

    return data ?? [];

  } catch (error) {
    log("Unexpected error fetching projects:", error);
    return [];
  }
}

export interface Project {
  id: number;
  title: string;
  description: string;
  release: string;
  slug: string;
  category_id: number;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}

export async function getLatestProjects(limit = 3): Promise<Project[]> {
  try {
    const { data, error } = await supabasePublic
      .from('projects')
      .select(`
        id,
        title,
        description,
        release,
        slug,
        category_id,
        category:categories!projects_category_id_fkey (
          id,
          name,
          slug
        )
      `)
      .order('release', { ascending: false })
      .limit(limit);

    if (error) {
      log('Error fetching latest projects:', error.message);
      return [];
    }

    return data ?? [];
  } catch (error) {
    log("Unexpected error fetching latest projects:", error);
    return [];
  }
}
