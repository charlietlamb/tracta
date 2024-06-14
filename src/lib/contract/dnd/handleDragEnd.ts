import { Dispatch, SetStateAction } from 'react'
import { changeTree } from '../functions/changeTree'
import { getNewJson } from '../functions/getNewJson'
import { getIndicators } from './getIndicators'
import { getNearestIndicator } from './getNearestIndicator'
import { getChangedKey } from '../functions/getChangedKey'

export function handleDragEnd(
  e: DragEvent,
  tree: TractaDraggable[],
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
  key: string,
  setKey: Dispatch<SetStateAction<string>>,
  end: boolean = false,
) {
  e.preventDefault()
  if (!e.dataTransfer) return
  const dragKey = e.dataTransfer.getData('tractaKey')

  const indicators = getIndicators()
  // const dataKeys = indicators.map((indicator) => indicator.dataset.key)
  const { element } = getNearestIndicator(e, indicators)
  const dropKey = element.dataset.key || '-1'
  const rect = element.getBoundingClientRect()
  const yPercentage = ((e.clientY - rect.top) / rect.height) * 100
  const pos = yPercentage <= 25 ? 'top' : yPercentage < 75 ? 'middle' : 'bottom'
  const changedTree = changeTree(tree, dragKey, dropKey, pos)
  setJson(getNewJson(json, changedTree))
  console.log(key)
  setKey(getChangedKey(key, dragKey, dropKey))
}
