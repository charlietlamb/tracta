import CreateSidebarBody from './CreateSidebarBody'
import CreateSidebarHeader from './CreateSidebarHeader'
import { motion } from 'framer-motion'

export default function CreateSidebar() {
  return (
    <motion.div className="no-scrollbar flex h-full max-h-full flex-col overflow-auto" layout>
      <CreateSidebarHeader />
      <CreateSidebarBody />
    </motion.div>
  )
}
