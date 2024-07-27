import React from 'react'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import type { DraggableLocation, DropResult } from '@hello-pangea/dnd'
import CreateSidebarDragList from './CreateSidebarDragList'
import { changeTree } from '@/lib/contract/functions/changeTree'
import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'
import { getNewJson } from '@/lib/contract/functions/getNewJson'
import CreateSidebarDropper from './CreateSidebarDropper'
import getDropKey from '@/lib/contract/functions/getDropKey'

export default function CreateSidebarMain({
  initialList,
}: {
  initialList: TractaDraggable[]
}) {
  const { json, setJson, setLastChange, setIsDragging } = useCreateContext()
  const { title, author, date, variables, settings, ...contract } = json
  function onDragEnd(result: DropResult): void {
    console.log(result)
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
      <div className="flex flex-grow flex-col items-center justify-start bg-bg p-2">
        {/* <CreateSidebarDropper keyString={'0'} /> */}
        {initialList.map((list) => {
          return (
            // <>
            <CreateSidebarDragList list={list} parent="-" />
            // {/* <CreateSidebarDropper keyString={list.key} /> */}
            // {/* </> */}
          )
        })}
      </div>
    </DragDropContext>
  )
}
