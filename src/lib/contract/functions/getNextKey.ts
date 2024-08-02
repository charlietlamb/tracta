export function getNextKey(json: Contract, key: string, nullSelected: boolean) {
  let i = 1
  if (!(key in json) || nullSelected) {
    while (true) {
      let key = i.toString()
      if (!(key in json)) {
        return key
      }
      i++
    }
  }
  i = 1
  while (key + `.${i}` in json) {
    i++
  }
  return key + `.${i}`
}
