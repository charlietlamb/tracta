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
import CreateSidebarHeader from './CreateSidebarHeader'

export default function CreateSidebar() {
  const { json } = useCreateContext()
  const { title, author, date, variables, settings, ...contract } = json
  return (
    <motion.div
      className={cn(
        'no-scrollbar divide-border bg-dark flex h-full max-h-full flex-col divide-y overflow-auto',
      )}
      layout
    >
      <CreateSidebarHeader />
      <ResizablePanelGroup
        direction="vertical"
        className="divide-border flex flex-grow divide-y"
      >
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
