import { createClient } from '@/utils/supabase/client'

export async function checkEmail(email: string) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('email', email)
  if (error) throw error
  return !!data.length
}
