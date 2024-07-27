import { cn } from '@/lib/utils'
import { Droppable } from '@hello-pangea/dnd'
import { useCreateContext } from '../context/createContext'

export default function CreateSidebarDropper({
  keyString,
}: {
  keyString: string
}) {
  const { isDragging } = useCreateContext()
  return (
    <Droppable droppableId={'b-' + keyString}>
      {(dropProvided, dropSnapshot) => (
        <div
          className={cn(
            'user-select-none flex w-full flex-col gap-2 bg-bg pb-0 transition focus:outline-none focus:ring-2 focus:ring-offset-2',
            dropSnapshot.isDraggingOver && 'animate-pulse',
          )}
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
        >
          <div
            className={cn(
              'h-8 text-bg transition',
              dropSnapshot.isDraggingOver && 'bg-main text-main',
            )}
          >
            DROPZONE
          </div>
          {dropProvided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
