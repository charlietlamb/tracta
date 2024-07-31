import { cn } from '@/lib/utils'
import { useCreateContext } from '../context/createContext'
import { ReceiptText } from 'lucide-react'

export default function CreateSidebarDraggable({
  parent,
  className,
}: {
  parent: string
  className?: string
}) {
  const { json, setKey, setTitle } = useCreateContext()
  const size = parent.split('.').length
  return (
    <div
      className="flex min-w-0 flex-shrink flex-grow items-center justify-start transition"
      style={{ paddingLeft: `${20 * (size - 1) + 8}px` }}
      onClick={(e) => {
        e.stopPropagation()
        setKey(parent)
        setTitle(json[parent].values[0])
      }}
    >
      <ReceiptText className="mr-1 size-4 min-h-4 min-w-4" />
      <h4
        className={cn(
          'flex min-w-0 flex-shrink items-center justify-start truncate font-semibold',
          className,
        )}
      >
        {`${parent.length && json[parent].values[0]}`}
      </h4>
    </div>
  )
}
