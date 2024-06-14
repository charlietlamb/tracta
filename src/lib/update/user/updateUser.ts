import { createClient } from '@/utils/supabase/client'

export async function updateUser(
  user: User,
  values: {
    username: string
    email: string
    first_name: string
    last_name: string
    image: string
  },
) {
  const supabase = createClient()
  console.log(values)
  const { error } = await supabase
    .from('users')
    .update(values)
    .eq('id', user.id)

  if (error) throw error
}
