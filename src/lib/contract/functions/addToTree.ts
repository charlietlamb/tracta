export function addToTree(
  key: string,
  data: TractaDraggable | null,
  tree: TractaDraggable[],
): void {
  if (!data) {
    return
  }

  const indices = key.split('.').map((part) => parseInt(part) - 1)
  let currentNode: TractaDraggable[] | null = tree

  // Update keys of all nodes that should be incremented
  updateKeys(tree, key)

  for (let i = 0; i < indices.length; i++) {
    const index = indices[i]

    if (currentNode && i === indices.length - 1) {
      currentNode.splice(index, 0, {
        key: key,
        tracta: data.tracta,
        values: data.values,
        children: data.children || [],
      })
    } else if (currentNode) {
      currentNode = currentNode[index]?.children || []
    } else {
      break
    }
  }
}

function updateKeys(tree: TractaDraggable[], key: string) {
  const keyParts = key.split('.').map((part) => parseInt(part))

  const updateNode = (node: TractaDraggable, parentKey: string) => {
    const nodeKeyParts = node.key.split('.').map((part) => parseInt(part))

    // Check if the node key should be incremented
    for (let i = 0; i < keyParts.length; i++) {
      if (i >= nodeKeyParts.length || nodeKeyParts[i] > keyParts[i]) {
        break
      }
      if (
        nodeKeyParts[i] === keyParts[i] &&
        ((i === keyParts.length - 1 && nodeKeyParts[i + 1]) || i === 0)
      ) {
        nodeKeyParts[i + 1]++
        node.key = parentKey + '.' + (nodeKeyParts[i + 1] + 1)
        break
      }
    }

    // Recursively update children
    if (node.children) {
      node.children.forEach((child) => updateNode(child, node.key))
    }
  }

  tree.forEach((node) => updateNode(node, ''))
}
