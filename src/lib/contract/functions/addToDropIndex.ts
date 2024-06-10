import { mapKeyToIndex } from './mapKeyToIndex'

export function addToDropIndex(
  dropKey: string,
  data: any,
  nestedArray: any[],
): any[] {
  function addValue(arr: any[], indices: number[], value: any) {
    const index = indices[0]
    if (indices.length === 1) {
      if (!Array.isArray(arr[index])) {
        arr[index] = []
      }
      arr[index].push(value)
    } else {
      if (!Array.isArray(arr[index])) {
        arr[index] = []
      }
      addValue(arr[index], indices.slice(1), value)
    }
  }

  const indices = mapKeyToIndex(dropKey)
  addValue(nestedArray, indices, data)

  return nestedArray
}
