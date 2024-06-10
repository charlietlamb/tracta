import { createClient } from '@/utils/supabase/client'

export async function unsaveContact(user: User, contract: ContractData) {
  const supabase = createClient()
  const { error } = await supabase
    .from('saved')
    .delete()
    .eq('user', user.id)
    .eq('contract', contract.id)
  if (error) throw error
}
