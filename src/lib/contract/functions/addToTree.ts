import { addToEnd } from './addToEnd'

export function addToTree(
  dropKey: string,
  data: TractaDraggable | null,
  tree: TractaDraggable[],
): void {
  if (!data) {
    return
  }
  if (dropKey === '-1') {
    tree.unshift(data)
    return
  }

  if (dropKey === '0') {
    addToEnd(tree, data)
    return
  }
  const keys = dropKey.split('.')
  const indices = keys.map((key) => parseInt(key) - 1)
  let currentNode: TractaDraggable[] | null = tree

  for (let i = 0; i < indices.length; i++) {
    let index = indices[i]
    if (currentNode) {
      if (i === indices.length - 1) {
        if (currentNode[index]) {
          currentNode[index].children
            ? currentNode[index].children.splice(index, 0, data)
            : (currentNode[index].children = [data])
        }
      } else {
        currentNode =
          currentNode[index] && currentNode[index].children
            ? currentNode[index].children
            : []
      }
    } else {
      break
    }
  }
}
