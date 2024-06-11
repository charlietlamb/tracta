import { addToTree } from './addToTree'
import { removeFromTree } from './removeFromTree'

export function changeTree(
  tree: TractaDraggable[],
  dragKey: string,
  dropKey: string,
) {
  let newTree = tree
  const data = removeFromTree(dragKey, newTree)
  addToTree(dropKey, data, newTree)
  return newTree
}
