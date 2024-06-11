import { addToTree } from './addToTree'
import { removeFromTree } from './removeFromTree'

export function changeTree(
  tree: TractaDraggable[],
  dragKey: string,
  dropKey: string,
) {
  if (dragKey === dropKey) return tree
  let newTree = tree
  const data = removeFromTree(dragKey, newTree)
  console.log(newTree)
  addToTree(dropKey, data, newTree)
  console.log(newTree)
  return newTree
}
