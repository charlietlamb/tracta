import { Droppable, Draggable } from '@hello-pangea/dnd'
import CreateSidebarDraggable from './CreateSidebarDraggable'

export default function CreateSidebarWidget({
  contract,
}: {
  contract: Tracta
}) {
  console.log(contract)
  if (!contract.children)
    return <CreateSidebarDraggable>{contract.key}</CreateSidebarDraggable>
  return (
    <div className="w-full">
      <CreateSidebarDraggable>{contract.key}</CreateSidebarDraggable>

      <Droppable droppableId={contract.key}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {contract.children &&
              contract.children.map((child, index) => (
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
    </div>
  )
}
