import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import { cn } from '@/lib/utils'

export default function CreateSidebarDragList({
  list,
  parent,
}: {
  list: TractaDraggable[]
  parent: string
}) {
  return (
    <Droppable droppableId={list.key} key={list.key}>
      {(dropProvided, dropSnapshot) => (
        <div
          className={cn(
            'user-select-none flex w-full flex-col gap-2 bg-red-500 p-2 pb-0 transition focus:outline-none focus:ring-2 focus:ring-offset-2',
            dropSnapshot.isDraggingOver && 'animate-pulse',
          )}
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
        >
          <h4>{`${list.key} ${list.values[0]}`}</h4>
          {list.children &&
            list.children.map((item: TractaDraggable, index: number) => (
              <Draggable draggableId={item.key} key={item.key} index={index}>
                {(dragProvided, dragSnapshot) => {
                  return (
                    <div
                      className={cn(
                        'mb-2 border-2 border-black bg-bg transition-all',
                        dragSnapshot.isDragging && 'shadow-base',
                      )}
                      ref={dragProvided.innerRef}
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                    >
                      <CreateSidebarDragList list={item as TractaDraggable} />
                    </div>
                  )
                }}
              </Draggable>
            ))}
          {dropProvided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
