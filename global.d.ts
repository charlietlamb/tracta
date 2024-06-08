import { SupabaseClient } from '@supabase/supabase-js'
import { Database as DB } from './types/supabase'
import { Json } from '@/utils/supabase/types/supabase'

declare global {
  type TODO = any
  type Database = DB
  type Supabase = SupabaseClient
  type User = DB['public']['Tables']['users']['Row']
  type Component = DB['public']['Tables']['components']['Row']

  interface Contract {
    [key: string]: Tracta
    title: string
    author: string
    date: string
  }

  interface Tracta {
    tracta: string
    values: string[]
  }
}
