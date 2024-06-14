import { getBottomKey } from './getBottomKey'
import { getMiddleKey } from './getMiddleKey'

export function getNewKey(
  tree: TractaDraggable[],
  dropKey: string,
  dragKey: string,
  pos: string,
) {
  if (pos === 'top') return dropKey
  if (pos === 'middle') return getMiddleKey(tree, dropKey, dragKey)
  return getBottomKey(dropKey)
}
