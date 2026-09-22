import { createClient } from '@/lib/supabase/server'

export async function getCategories() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Failed to fetch categories')
  }

  return data
}

export type Category = Awaited<ReturnType<typeof getCategories>>;


export async function getProjects() {
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
      categories (
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

export type Project = Awaited<ReturnType<typeof getProjects>>;