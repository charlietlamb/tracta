import { createClient } from '@/utils/supabase/client'

export async function getContractSaved(user: User, contract: ContractData) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('saved')
    .select()
    .eq('user', user.id)
    .eq('contract', contract.id)
  if (error) throw error
  return data.length > 0
}
