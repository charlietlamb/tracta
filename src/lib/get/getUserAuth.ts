import { createClient } from '@/utils/supabase/server'
import { getUser } from './user/getUser'

export async function getUserAuth() {
  const supabase = createClient()
  const auth = await supabase.auth.getUser()
  const id = auth.data.user?.id || null
  const user = id ? await getUser(id) : null
  return user as User | null
}
