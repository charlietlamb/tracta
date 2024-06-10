export function isRank1Greater(rank1: string, rank2: string): boolean {
  const arr1 = rank1.split('.').map(Number)
  const arr2 = rank2.split('.').map(Number)

  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    if (arr1[i] < arr2[i]) {
      return false
    } else if (arr1[i] > arr2[i]) {
      return true
    }
  }

  // If all compared parts are equal, the longer rank is considered greater
  if (arr1.length < arr2.length) {
    return false
  } else if (arr1.length > arr2.length) {
    return true
  }

  // If the ranks are equal, return false
  return false
}
