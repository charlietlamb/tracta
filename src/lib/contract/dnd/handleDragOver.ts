import { Dispatch, SetStateAction } from 'react'
import { highlightIndicator } from './highlightIndicator'

export const handleDragOver = (
  e: DragEvent,
  setActive: Dispatch<SetStateAction<boolean>>,
) => {
  e.preventDefault()
  highlightIndicator(e)

  setActive(true)
}
