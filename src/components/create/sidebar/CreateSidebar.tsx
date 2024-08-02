import { motion } from 'framer-motion'
import CreateSidebarMain from './CreateSidebarMain'
import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'
import { cn } from '@/lib/utils'
import CreateSidebarStyles from './styles/CreateSidebarStyles'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

export default function CreateSidebar() {
  const { json } = useCreateContext()
  const { title, author, date, variables, settings, ...contract } = json
  return (
    <motion.div
      className={cn(
        'no-scrollbar bg-bgDark flex h-full max-h-full flex-col overflow-auto',
      )}
      layout
    >
      <ResizablePanelGroup direction="vertical" className="flex flex-grow">
        <ResizablePanel minSize={10} defaultSize={50} maxSize={90}>
          <CreateSidebarStyles />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={10} defaultSize={50} maxSize={90}>
          <CreateSidebarMain initialList={getTree(contract)} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </motion.div>
  )
}
