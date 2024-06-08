import { handleDragEnd } from '@/lib/contract/functions/handleDragEnd'
import { useCreateContext } from '../context/createContext'
import CreateSidebarWidget from './CreateSidebarWidget'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function CreateSidebarBody() {
  const { json, setJson } = useCreateContext()
  const { title, author, date, ...contract } = json
  const contractArray = Object.entries(contract)
  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => handleDragEnd(result, json, setJson)}
      >
        <Droppable droppableId="body">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {contractArray.map((c, index) => (
                <Draggable draggableId={c[0]} index={index} key={c[0]}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CreateSidebarWidget contract={c} />
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
