import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import { cn } from '@/lib/utils'
import {
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
  const { isDragging, key, sidebarSelected } = useCreateContext()
  return (
    <Droppable droppableId={!parent.length ? 'main' : parent}>
      {(dropProvided, dropSnapshot) => (
        <div
          className={cn(
            'flex w-full flex-col gap-4 overflow-visible p-0 transition focus:outline-none focus:ring-2 focus:ring-offset-2',
            dropSnapshot.isDraggingOver && 'bg-main',
          )}
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
        >
          {!!list.length ? (
            <AccordionItem
              value={parent.length === 0 ? 'main' : parent}
              className="flex flex-col overflow-visible rounded-b-none border-0 p-0 shadow-none"
            >
              <AccordionTrigger
                className={cn(
                  'max-w-full rounded-b-none rounded-t-none border-y border-bg bg-bg bg-transparent p-0 pr-1 transition hover:border-black hover:bg-main [&[data-state=open]]:border-b',
                  key === parent &&
                    sidebarSelected === parent &&
                    'border-black bg-main',
                )}
              >
                <CreateSidebarDraggable parent={parent} />
              </AccordionTrigger>
              <AccordionContent
                className="flex flex-grow flex-col overflow-visible rounded-b-none  bg-bg p-0"
                innerClassName={cn(
                  'overflow-hidden rounded-b-none',
                  isDragging && 'overflow-visible',
                )}
              >
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
            <div
              className={cn(
                'group flex justify-center overflow-hidden border-y border-bg bg-bg transition hover:border-black hover:bg-main',
                key === parent &&
                  sidebarSelected === parent &&
                  'border-black bg-main',
              )}
            >
              <CreateSidebarDraggable parent={parent} />
              <div
                className={cn(
                  'min-w-6 flex-shrink-0 bg-bg transition group-hover:bg-main',
                  key === parent && sidebarSelected === parent && 'bg-main',
                )}
              />
            </div>
          )}
          {dropProvided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
