import { DropResult } from '@hello-pangea/dnd'
import { handleDragLogic } from './handleDragLogic'
import { Dispatch, SetStateAction } from 'react'

export function handleDragEnd(
  result: DropResult,
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
) {
  const { destination, source, draggableId } = result
  if (!destination) return
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return
  handleDragLogic(draggableId, destination.droppableId, json, setJson)
  //   if (files.some((file) => file.id === draggableId)) {
  //     updateFileOnDrag(supabase, draggableId, destination.droppableId)
  //   } else if (folders.some((folder) => folder.id === draggableId)) {
  //     updateFolderOnDrag(supabase, draggableId, destination.droppableId)
  //   }
}
