import { getNextKeyFromTree } from './getNextKeyFromTree'

export function addToEnd(tree: TractaDraggable[], data: TractaDraggable): void {
  const key: string = getNextKeyFromTree(tree)
  tree[tree.length] = { ...data, key }
}
