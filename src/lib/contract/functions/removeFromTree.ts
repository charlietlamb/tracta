export function removeFromTree(
  dragKey: string,
  tree: TractaDraggable,
): TractaDraggable | null {
  const keys = dragKey.split('.')
  const indices = keys.map((key) => parseInt(key) - 1)
  let currentNode: TractaDraggable | null = tree
  let removedNode: TractaDraggable | null = null

  for (let i = 0; i < indices.length; i++) {
    let index = indices[i]
    if (i === indices.length - 1) {
      removedNode = currentNode.children
        ? currentNode.children.splice(index, 1)[0]
        : null
    } else {
      currentNode = currentNode.children ? currentNode.children[index] : null
      if (!currentNode) {
        break
      }
    }
  }

  return removedNode
}
