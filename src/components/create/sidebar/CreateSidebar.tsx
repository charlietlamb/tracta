import CreateSidebarHeader from './CreateSidebarHeader'
import { motion } from 'framer-motion'
import CreateSidebarMain from './CreateSidebarMain'
import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'
import { cn } from '@/lib/utils'

export default function CreateSidebar() {
  const { json, key } = useCreateContext()
  const { title, author, date, variables, settings, ...contract } = json
  return (
    <motion.div
      className={cn(
        'no-scrollbar flex h-full max-h-full flex-col divide-y-2 divide-black overflow-auto bg-bg',
      )}
      layout
    >
      <CreateSidebarHeader />
      <CreateSidebarMain initialList={getTree(contract)} />
    </motion.div>
  )
}
