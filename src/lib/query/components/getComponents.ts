import { createClient } from '@/utils/supabase/client'
export async function getComponents(
  pageParam: number | undefined,
  search: string,
) {
  if (pageParam === undefined) throw new Error('No page param')
  const supabase = createClient()
  const startIndex = (pageParam - 1) * 16
  const endIndex = startIndex + 16
  let query = supabase.from('components').select()
  if (search !== '') query = query.ilike('title', `%${search}%`)
  query = query.range(startIndex, endIndex)
  const { data, error } = await query
  if (error) throw error
  return data as Component[]
}
