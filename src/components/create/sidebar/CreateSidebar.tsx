import CreateSidebarBody from './CreateSidebarBody'
import CreateSidebarHeader from './CreateSidebarHeader'

export default function CreateSidebar() {
  return (
    <div className="no-scrollbar flex h-full max-h-full flex-col overflow-auto">
      <CreateSidebarHeader />
      <CreateSidebarBody />
    </div>
  )
}
