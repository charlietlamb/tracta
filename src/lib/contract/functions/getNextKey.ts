export function getNextKey(json: Contract) {
  let i = 1
  while (true) {
    let key = i.toString()
    if (!(key in json)) {
      return key
    }
    i++
  }
}
