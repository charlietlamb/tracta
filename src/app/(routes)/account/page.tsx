import Account from '@/components/account/Account'
import { getUserAuth } from '@/lib/get/getUserAuth'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function page() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/')
  const userData = getUserAuth()
  return <Account userInit={userData} />
}
