import CreateSidebarAdd from './CreateSidebarAdd'
import { useCreateContext } from '../context/createContext'
import CreateSidebarVariables from './CreateSidebarVariables'
import CreateSidebarSettings from './CreateSidebarSettings'

export default function CreateSidebarHeader() {
  const { setSidebarSelected } = useCreateContext()
  return (
    <div
      className="grid grid-cols-3 gap-4 p-2"
      onClick={() => setSidebarSelected(null)}
    >
      <CreateSidebarAdd />
      <CreateSidebarVariables />
      <CreateSidebarSettings />
    </div>
  )
}
