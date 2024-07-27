import getDropKey from './getDropKey'

export function getNewKey(dropKey: string, dropIndex: number) {
  if (dropKey.includes('b-')) return getDropKey(dropKey)
  return `${dropKey}.${dropIndex + 1}`
}
