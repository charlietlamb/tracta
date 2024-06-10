import { mapKeyToIndex } from './mapKeyToIndex'

export function removeAndStoreIndex(key: string, nestedArray: any[]): any {
  let storedValue: any = {}

  function removeValue(arr: any[], indices: number[], key: string) {
    const index = indices[0]
    if (indices.length === 1) {
      storedValue = arr[index]
      arr.splice(index, 1)
    } else {
      if (Array.isArray(arr[index])) {
        removeValue(arr[index], indices.slice(1), key)
      }
    }
  }

  const indices = mapKeyToIndex(key)
  removeValue(nestedArray, indices, key)

  return storedValue
}
