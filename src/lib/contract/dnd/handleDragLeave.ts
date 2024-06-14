import { Dispatch, SetStateAction } from 'react'

export const handleDragLeave = (
  e: DragEvent,
  setActive: Dispatch<SetStateAction<boolean>>,
) => {
  e.preventDefault()
  setActive(false)
}
