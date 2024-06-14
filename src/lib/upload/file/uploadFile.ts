import { createClient } from '@/utils/supabase/client'

export async function uploadFile(file: File, bucket: string, path: string) {
  const supabase = createClient()
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, { upsert: true })
  if (error) throw error
  return data.path
}
