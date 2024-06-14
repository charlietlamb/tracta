import { Dispatch, SetStateAction } from 'react'

export const handleDragOver = (
  e: DragEvent,
  setActive: Dispatch<SetStateAction<boolean>>,
) => {
  e.preventDefault()
  setActive(true)
}
