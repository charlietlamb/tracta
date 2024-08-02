import {
  DragDropContext,
  DragStart,
  Draggable,
  DropResult,
  Droppable,
} from '@hello-pangea/dnd'
import React, { useState } from 'react'
import { useCreateContext } from '../context/createContext'
import { sandboxMap } from '@/lib/contract/maps/sandboxMap'
import { cn } from '@/lib/utils'
import { GripHorizontal } from 'lucide-react'
import { onSandboxDragEnd } from '@/lib/sandbox/dnd/onSandboxDragEnd'

export default function CreateSandboxComponents() {
  const { json, setJson, dnd, key, setLastChange } = useCreateContext()
  const [currentId, setCurrentId] = useState<string | null>(null)
  return (
    <DragDropContext
      onDragStart={(e: DragStart) => setCurrentId(e.draggableId)}
      onDragEnd={(e: DropResult) => {
        setCurrentId(null)
        onSandboxDragEnd(e, json, setJson, key, setLastChange)
      }}
    >
      <Droppable droppableId="sandbox">
        {(provided, droppableSnapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col gap-4"
          >
            {Array.isArray(json[key]) &&
              json[key].slice(1).map((item, index) => {
                const SandboxComponent = sandboxMap.get(item.tracta)
                if (!SandboxComponent) return null
                return (
                  <Draggable draggableId={`${index + 1}`} index={index + 1}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <div
                          className={cn(
                            'group relative w-full rounded-base border-2 border-black bg-white p-4 px-2 transition hover:border-black',
                            !dnd && 'border-0 p-0',
                          )}
                        >
                          <div
                            className={cn(
                              'absolute left-1/2 top-1 z-30 mx-auto hidden w-fit -translate-x-1/2 cursor-grab rounded-base border-2 border-black bg-white transition active:cursor-grabbing group-hover:flex',
                              droppableSnapshot.isDraggingOver &&
                                currentId === `${index + 1}` &&
                                'flex',
                              droppableSnapshot.isDraggingOver &&
                                currentId !== `${index + 1}` &&
                                'hidden group-hover:hidden',
                              !dnd && 'hidden group-hover:hidden',
                            )}
                            {...provided.dragHandleProps}
                          >
                            <GripHorizontal className="text-black" />
                          </div>
                          {SandboxComponent(index + 1, key)}
                        </div>
                      </div>
                    )}
                  </Draggable>
                )
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
