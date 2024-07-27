import { addToTree } from './addToTree'
import { getNewKey } from './getNewKey'
import { removeFromTree } from './removeFromTree'

export function changeTree(
  tree: TractaDraggable[],
  dragKey: string,
  dropKey: string,
  dropIndex: number,
): TractaDraggable[] {
  if (dragKey === dropKey) return tree
  let newTree = tree
  const data = removeFromTree(dragKey, newTree)
  const key = getNewKey(dropKey, dropIndex)
  addToTree(key, data, newTree)
  return newTree
}
