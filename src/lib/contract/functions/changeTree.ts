import { removeFromTree } from './removeFromTree'

export function (
  tree: TractaDraggable,
  dragKey: string,
  dropKey: string,
) {
  let newTree = tree
  console.log('-- CHANGING TREE --')
  console.log(tree)
  const data = removeFromTree(dragKey, newTree)
  console.log(newTree)
  console.log(data)
  //   addToDropIndex(dropKey, data, newTree)
  return newTree
}
