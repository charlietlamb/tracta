import { handleDragEnd } from '@/lib/contract/functions/handleDragEnd'
import { useCreateContext } from '../context/createContext'
import CreateSidebarWidget from './CreateSidebarWidget'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function CreateSidebarBody() {
  const { json, setJson } = useCreateContext()
  const contract = json.content
  console.log(contract)

  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => handleDragEnd(result, json, setJson)}
      >
        <Droppable droppableId="body">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {contract.map((child, index) => (
                <Draggable
                  draggableId={child.key}
                  index={index}
                  key={child.key}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CreateSidebarWidget contract={child} />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
