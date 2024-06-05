import { createClient } from '@/utils/supabase/client'

export async function getUser(id: string) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('id', id)
    .single()
  if (error) throw error
  return data as User
}
