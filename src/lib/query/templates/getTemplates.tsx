import { createClient } from '@/utils/supabase/client'
export async function getTemplates(
  pageParam: number | undefined,
  search: string,
) {
  if (pageParam === undefined) throw new Error('No page param')
  const supabase = createClient()
  const startIndex = (pageParam - 1) * 16
  const endIndex = startIndex + 16
  let query = supabase.from('contracts').select('*, user(*)')
  if (search !== '') {
    query = query.or(
      `title.ilike.%${search}%,description.ilike.%${search}%,tags.ilike.%${search}%`,
    )
  }
  query = query.eq('template', true)
  query = query.range(startIndex, endIndex)
  const { data, error } = await query
  if (error) throw error
  return data as ContractData[]
}
