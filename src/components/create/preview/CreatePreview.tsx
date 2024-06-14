import MovingGrid from '@/components/grid/MovingGrid'
import { useCreateContext } from '../context/createContext'

export default function CreatePreview() {
  const { setSidebarSelected } = useCreateContext()
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onClick={() => setSidebarSelected(null)}
    >
      <MovingGrid />
    </div>
  )
}
