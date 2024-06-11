let newContractData: any = {}
export function getNewJson(json: Contract, tree: TractaDraggable[]) {
  newContractData = {}
  const { title, author, date, ...contractData } = json
  navigateTree(tree, [])
  return { title, author, date, ...newContractData }
}

function navigateTree(tree: TractaDraggable[], indexArray: number[]) {
  for (let i = 0; i < tree.length; i++) {
    const index = [...indexArray, i + 1]
    const keys = index.map((key) => key.toString())
    const key = keys.join('.')
    const tracta = tree[i]
    newContractData[key] = { tracta: tracta.tracta, values: tracta.values }
    if (tracta.children) navigateTree(tracta.children, index)
  }
}
