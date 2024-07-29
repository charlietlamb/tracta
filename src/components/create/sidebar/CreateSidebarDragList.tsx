import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useCreateContext } from '../context/createContext'
import CreateSidebarDraggable from './CreateSidebarDraggable'

export default function CreateSidebarDragList({
  list,
  parent,
}: {
  list: TractaDraggable[] | null
  parent: string
}) {
  if (!list) return null
  const { isDragging } = useCreateContext()
  return (
    <Droppable droppableId={!parent.length ? 'main' : parent}>
      {(dropProvided, dropSnapshot) => (
        <div
          className={cn(
            'user-select-none flex w-full flex-col gap-4 overflow-visible p-0 transition focus:outline-none focus:ring-2 focus:ring-offset-2',
            dropSnapshot.isDraggingOver && 'animate-pulse',
          )}
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
        >
          {!!list.length ? (
            <AccordionItem
              value={parent.length === 0 ? 'main' : parent}
              className="flex flex-col overflow-visible border-0 p-0 shadow-none"
            >
              <AccordionTrigger className="overflow-hidden border-0 bg-transparent p-0 pr-2 [&[data-state=open]]:border-b">
                <CreateSidebarDraggable parent={parent} />
              </AccordionTrigger>
              <AccordionContent
                className="flex flex-grow flex-col gap-2 overflow-visible bg-bg px-0 py-2"
                innerClassName={
                  isDragging ? 'overflow-visible' : 'overflow-hidden'
                }
              >
                {' '}
                {/* div with overflow */}
                {list.map((item: TractaDraggable, index: number) => (
                  <Draggable
                    draggableId={item.key}
                    key={item.key}
                    index={index}
                  >
                    {(dragProvided, dragSnapshot) => {
                      return (
                        <div
                          className={cn(
                            'flex flex-col overflow-visible bg-bg transition-all',
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
              </AccordionContent>
            </AccordionItem>
          ) : (
            <div className="overflow-hidden">
              <CreateSidebarDraggable parent={parent} />
            </div>
          )}
          {dropProvided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
