import { getNextKeyFromTree } from './getNextKeyFromTree'

export function addToEnd(tree: TractaDraggable[], data: TractaDraggable): void {
  console.log(tree)
  const key: string = getNextKeyFromTree(tree)
  console.log({ ...data, key })
  tree[tree.length] = { ...data, key }
  console.log(tree)
}
