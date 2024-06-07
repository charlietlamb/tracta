import CreateSidebarBody from './CreateSidebarBody'
import CreateSidebarHeader from './CreateSidebarHeader'

export default function CreateSidebar() {
  return (
    <div className="flex h-full flex-col divide-y-2 divide-black">
      <CreateSidebarHeader />
      <CreateSidebarBody />
    </div>
  )
}
