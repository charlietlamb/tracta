import { createClient } from "@/utils/supabase/client"

export async function insertUser(id: string, email: string) {
    const supabase = createClient()
    const { data, error } = await supabase.from('users').insert({ id, email })
    if(error) throw error
    return data as User
}