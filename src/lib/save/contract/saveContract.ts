import { createClient } from '@/utils/supabase/client'

export async function saveContract(user: User, contract: ContractData) {
  const supabase = createClient()
  const { error } = await supabase.from('saved').insert([
    {
      user: user.id,
      contract: contract.id,
    },
  ])
  if (error) throw error
}
