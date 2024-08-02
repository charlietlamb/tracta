import { DropResult } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

export function onSandboxDragEnd(
  e: DropResult,
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
  key: string,
  setLastChange: Dispatch<SetStateAction<number>>,
) {
  console.log(e)
  if (e.draggableId === e.source.droppableId || e.destination === null) return

  const dragIndex = parseInt(e.draggableId)
  const dropIndex = e.destination.index

  // Use a temporary variable for swapping
  const temp = json[key][dragIndex]
  json[key][dragIndex] = json[key][dropIndex]
  json[key][dropIndex] = temp

  // Update the state with the modified json object
  setJson({ ...json })
  setLastChange(Date.now())
}
