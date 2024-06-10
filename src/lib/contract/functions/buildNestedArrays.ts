import { mapKeyToIndex } from './mapKeyToIndex'

export function buildNestedArrays(keys: string[]): any[] {
  let nestedArray: any[] = []

  function setValue(arr: any[], indices: number[], value: any) {
    const index = indices[0]
    if (indices.length === 1) {
      arr[index] = value
    } else {
      if (!Array.isArray(arr[index])) {
        arr[index] = []
      }
      setValue(arr[index], indices.slice(1), value)
    }
  }

  for (const key of keys) {
    const indices = mapKeyToIndex(key)
    setValue(nestedArray, indices, key)
  }
  return nestedArray
}
