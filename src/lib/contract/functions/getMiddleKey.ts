export function getMiddleKey(
  tree: TractaDraggable[],
  dropKey: string,
  dragKey: string,
): string {
  // Helper function to find a node by key in the tree
  const findNode = (
    tree: TractaDraggable[],
    key: string,
  ): TractaDraggable | null => {
    for (const node of tree) {
      if (node.key === key) {
        return node
      } else if (node.children) {
        const foundNode = findNode(node.children, key)
        if (foundNode) {
          return foundNode
        }
      }
    }
    return null
  }

  // Find the node with the dropKey
  const node = findNode(tree, dropKey)

  // If the dragKey is before the dropKey in the tree, decrement the dropKey
  if (dragKey.split('.').map(Number) < dropKey.split('.').map(Number)) {
    const dropKeyParts = dropKey.split('.')
    dropKeyParts[dropKeyParts.length - 1] = (
      parseInt(dropKeyParts[dropKeyParts.length - 1]) - 1
    ).toString()
    dropKey = dropKeyParts.join('.')
  }

  if (node && node.children && node.children.length > 0) {
    // If the node has children, get the key of the last child and increment the last part
    const lastChildKey = node.children[node.children.length - 1].key
    const lastChildKeyParts = lastChildKey.split('.')
    lastChildKeyParts[lastChildKeyParts.length - 1] = (
      parseInt(lastChildKeyParts[lastChildKeyParts.length - 1]) + 1
    ).toString()
    return lastChildKeyParts.join('.')
  } else {
    // If the node has no children, append .1 to the dropKey
    return `${dropKey}.1`
  }
}
