import { cn } from '@/lib/utils'
import { useCreateContext } from '../context/createContext'
import { GripVertical } from 'lucide-react'

export default function CreateSidebarDraggable({
  parent,
  className,
}: {
  parent: string
  className?: string
}) {
  const { json, setKey, setTitle } = useCreateContext()
  return (
    <div className="flex w-full items-center justify-between">
      <h4
        className={cn(
          'flex flex-grow justify-start overflow-ellipsis whitespace-nowrap px-2 font-bold',
          className,
        )}
        onClick={(e) => {
          e.stopPropagation()
          setKey(parent)
          setTitle(json[parent].values[0])
        }}
      >{`${!parent.length ? 'main' : parent} ${parent.length && json[parent].values[0]}`}</h4>
      {/* <GripVertical className="cursor-grab active:cursor-grabbing" /> */}
    </div>
  )
}
