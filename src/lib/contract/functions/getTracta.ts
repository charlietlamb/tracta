export function getTracta(contract: Tracta[], key: string): string | null {
  for (let item of contract) {
    if (item.key === key) {
      return item.tracta
    }

    if (Array.isArray(item.children)) {
      for (let child of item.children) {
        const result = getTracta(child.children || [], key)
        if (result) {
          return result
        }
      }
    }
  }

  return null
}
