import { addToDropIndex } from './addToDropIndex'
import { removeAndStoreIndex } from './removeAndStoreIndex'

export function changeNestedArray(
  nestedArray: any[],
  dragKey: string,
  dropKey: string,
) {
  let newNestedArray = nestedArray
  const data = removeAndStoreIndex(dragKey, newNestedArray)
  addToDropIndex(dropKey, data, newNestedArray)
  return newNestedArray
}
