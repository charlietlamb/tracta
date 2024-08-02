import { cn } from '@/lib/utils'
import { useCreateContext } from '../context/createContext'
import { ReceiptText } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function CreateSidebarDraggable({
  parent,
  className,
}: {
  parent: string
  className?: string
}) {
  const { json, setKey, setTitle, index, setSidebarSelected } =
    useCreateContext()
  const size = parent.split('.').length
  let text = ''
  try {
    text = json[parent][0].value
  } catch (e) {}

  return (
    <div
      className={cn(
        'flex min-w-0 flex-shrink flex-grow items-center justify-start transition',
      )}
      onClick={(e) => {
        e.stopPropagation()
        setKey(parent)
        setSidebarSelected(parent)
        setTitle(text)
      }}
    >
      <Separator
        className="bg-darkBorder mr-1"
        style={{ width: `${20 * (size - 1) + 8}px` }}
      />
      <ReceiptText className="mr-1 size-4 min-h-4 min-w-4" />
      <h4
        className={cn(
          'font-larken flex min-w-0 flex-shrink items-center justify-start truncate font-light',
          className,
        )}
      >
        {`${parent.length && text}`}
      </h4>
    </div>
  )
}
