import { SupabaseClient } from '@supabase/supabase-js'
import { Database as DB } from './types/supabase'
import { Json } from '@/utils/supabase/types/supabase'

declare global {
  type TODO = any
  type Database = DB
  type Supabase = SupabaseClient<Database>
  type User = DB['public']['Tables']['users']['Row']
  type Component = DB['public']['Tables']['components']['Row']
  type ContractData = DB['public']['Tables']['contracts']['Row']
  type SaveData = DB['public']['Tables']['saved']['Row']

  type Contract = ContractMeta & ContractTree

  interface ContractMeta {
    title: string
    author: string
    date: string
  }

  interface ContractTree {
    [key: string]: Tracta
  }

  interface Tracta {
    tracta: string
    values: string[]
  }

  interface TractaDraggable {
    key: string
    tracta: string
    values: string[]
    children: TractaDraggable[] | null
  }
}
