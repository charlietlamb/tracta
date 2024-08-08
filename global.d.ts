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

  interface EditorState {
    editor: Editor
    history: EditorHistory
  }

  interface Editor {
    settings: TractaSettings
    components: TractaComponent[]
    variables: { [key: string]: string }
    selected: TractaComponent | null
    liveMode: boolean
    pages: number
  }

  interface TractaSettings {
    title: string
    template: boolean
  }
  interface TractaComponent {
    id: string
    name: string
    tracta: TractaComponentType
    styles: React.CSSProperties
    content:
      | TractaComponent[]
      | { href?: string; innerHTML?: string; src?: string }
  }
  type TractaComponentType =
    | 'body'
    | 'container'
    | 'heading'
    | 'text'
    | 'table'
    | null

  interface EditorHistory {
    editors: Editor[]
    index: number
  }

  type ToolbarMode = 'add' | 'preview' | 'order' | null

  interface AddComponents {
    id: string
    text: string
    component: TractaComponent
    icon: React.ReactNode
  }

  type Metric = 'px' | '%'
}
