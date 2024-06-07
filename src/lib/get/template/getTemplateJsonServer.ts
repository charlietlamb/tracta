import { createClient } from '@/utils/supabase/client'

export async function getTemplateJsonServer(key: string) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('templates')
    .select()
    .eq('key', key)
    .single()
  if (error) throw error
  return data.json as Contract
}
