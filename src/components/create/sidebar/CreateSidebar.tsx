import CreateSidebarBody from './CreateSidebarBody'
import CreateSidebarDropzoneGrow from './CreateSidebarDropzoneGrow'
import CreateSidebarHeader from './CreateSidebarHeader'
import { motion } from 'framer-motion'

export default function CreateSidebar() {
  return (
    <motion.div
      className="no-scrollbar flex h-full max-h-full flex-col overflow-auto"
      layout
    >
      <CreateSidebarHeader />
      <CreateSidebarBody />
      <CreateSidebarDropzoneGrow />
    </motion.div>
  )
}
