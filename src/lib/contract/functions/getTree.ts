function createTree(
  contractArray: [string, { tracta: string; values: string[] }][],
  rootKey: string = contractArray[0][0],
): TractaDraggable | null {
  // Base case: if the contractArray is empty, return null
  if (contractArray.length === 0) {
    return null
  }

  // Create the root node
  const rootValue = contractArray.find(([key]) => key === rootKey)?.[1]
  if (!rootValue) {
    return null
  }

  const root: TractaDraggable = {
    key: rootKey,
    tracta: rootValue.tracta,
    values: rootValue.values,
    children: [],
  }

  // Create the children nodes
  const childKeys = contractArray
    .filter(([key]) => key.startsWith(rootKey) && key !== rootKey)
    .map(([key]) => key)

  for (const childKey of childKeys) {
    const directChildren = childKeys.filter(
      (key) => key.split('.').length === rootKey.split('.').length + 1,
    )

    if (directChildren.includes(childKey)) {
      const newChild = createTree(contractArray, childKey)
      root.children && newChild && root.children.push(newChild)
    }
  }

  return root
}

export function getTree(contract: ContractTree) {
  const contractArray = Object.entries(contract)
  const topLevelKeys = contractArray
    .map(([key]) => key.split('.')[0])
    .filter((value, index, self) => self.indexOf(value) === index)

  const trees = topLevelKeys
    .map((key) => createTree(contractArray, key))
    .filter(Boolean) as TractaDraggable[]

  return trees as TractaDraggable[]
}
