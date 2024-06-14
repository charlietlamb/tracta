import { addToTree } from './addToTree'
import { getNewKey } from './getNewKey'
import { removeFromTree } from './removeFromTree'

export function changeTree(
  tree: TractaDraggable[],
  dragKey: string,
  dropKey: string,
  pos: string,
) {
  if (dragKey === dropKey) return tree
  let newTree = tree
  const data = removeFromTree(dragKey, newTree)
  const key = getNewKey(tree, dropKey, dragKey, pos)
  addToTree(key, data, newTree)
  return newTree
}
