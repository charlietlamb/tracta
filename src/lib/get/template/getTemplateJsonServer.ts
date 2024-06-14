import { createClient } from '@/utils/supabase/client'

export async function getTemplateJsonServer(id: string) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('contracts')
    .select()
    .eq('id', id)
    .single()
  if (error) throw error
  return data.json as Contract
}
