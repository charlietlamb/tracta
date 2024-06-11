import { Dispatch, SetStateAction } from 'react'
import { changeTree } from '../functions/changeTree'
import { getNewJson } from '../functions/getNewJson'
import { clearHighlights } from './clearHighlights'
import { getIndicators } from './getIndicators'
import { getNearestIndicator } from './getNearestIndicator'

export const handleDragEnd = (
  e: DragEvent,
  tree: TractaDraggable[],
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
  end: boolean = false,
) => {
  e.preventDefault()
  if (!e.dataTransfer) return
  const dragKey = e.dataTransfer.getData('tractaKey')
  clearHighlights()

  const indicators = getIndicators()
  const { element } = getNearestIndicator(e, indicators)

  const dropKey = end ? '0' : element.dataset.key || '-1'
  const changedTree = changeTree(tree, dragKey, dropKey)
  setJson(getNewJson(json, changedTree))
}
