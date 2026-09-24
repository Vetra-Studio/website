import { createClient } from '@/lib/supabase/server'

export async function getCategories() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('categories')
    .select('name, slug')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Failed to fetch categories')
  }

  return data;
}

export interface Category {
  name: string;
  slug: string;
}

export async function getProjects(): Promise<Project[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
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
  
  if (error) {
    console.error('Error fetching projects:', error)
    throw new Error('Failed to fetch projects')
  }

  return data;
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