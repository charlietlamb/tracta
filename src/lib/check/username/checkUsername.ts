import { createClient } from '@/utils/supabase/client'

export async function checkUsername(user: User, username: string) {
  const supabase = createClient()
  const { data, error } = (await supabase
    .from('users')
    .select('username')
    .eq('username', username)
    .single()) as User
  if (error) throw error
  if (!data) return true
  if (data.id === user.id) return true
  return false
}
