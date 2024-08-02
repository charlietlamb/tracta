import React from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import type { DraggableLocation, DropResult } from '@hello-pangea/dnd'
import CreateSidebarDragList from './CreateSidebarDragList'
import { changeTree } from '@/lib/contract/functions/changeTree'
import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'
import { getNewJson } from '@/lib/contract/functions/getNewJson'
import { Accordion } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export default function CreateSidebarMain({
  initialList,
}: {
  initialList: TractaDraggable[]
}) {
  const { json, setJson, setLastChange, setIsDragging, setSidebarSelected } =
    useCreateContext()
  const { title, author, date, variables, settings, ...contract } = json
  function onDragEnd(result: DropResult): void {
    setIsDragging(false)
    if (!result.destination) return
    const tree = getTree(contract)
    const newTree = changeTree(
      tree,
      result.draggableId,
      result.destination.droppableId,
      result.destination.index,
    )
    setJson(getNewJson(json, newTree))
    setLastChange(Date.now())
  }
  return (
    <DragDropContext
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e) => onDragEnd(e)}
    >
      <div
        className={cn('flex flex-grow flex-col items-center justify-start ')}
      >
        <Droppable droppableId={'main'}>
          {(dropProvided, dropSnapshot) => (
            <div
              className={cn(
                'flex h-full w-full flex-col gap-4 transition focus:outline-none focus:ring-2 focus:ring-offset-2',
                dropSnapshot.isDraggingOver && 'animate-pulse',
              )}
              ref={dropProvided.innerRef}
              {...dropProvided.droppableProps}
            >
              <Accordion type="multiple" className="flex flex-col">
                {initialList.map((item: TractaDraggable, index: number) => (
                  <Draggable
                    draggableId={item.key}
                    key={item.key}
                    index={index}
                  >
                    {(dragProvided, dragSnapshot) => {
                      return (
                        <div
                          className={cn(
                            'bg-bg transition-all',
                            dragSnapshot.isDragging && 'shadow-base',
                          )}
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                        >
                          <CreateSidebarDragList
                            list={item.children}
                            parent={item.key}
                          />
                        </div>
                      )
                    }}
                  </Draggable>
                ))}
              </Accordion>
              {dropProvided.placeholder}
              <div
                className="w-full flex-grow"
                onClick={() => setSidebarSelected(null)}
              />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}
