export function getChangedKey(
  key: string,
  dragKey: string,
  dropKey: string,
): string {
  const keyParts = key.split('.').map(Number)
  const dragKeyParts = dragKey.split('.').map(Number)
  const dropKeyParts = dropKey.split('.').map(Number)

  // If the key is a child of the dragKey, update it to be a child of the dropKey
  if (keyParts.slice(0, dragKeyParts.length).join('.') === dragKey) {
    return dropKey + key.slice(dragKey.length)
  }

  // If the key is after the dragKey, decrement it
  if (keyParts[0] > dragKeyParts[0]) {
    keyParts[0]--
    return keyParts.join('.')
  }

  // If the key is after the dropKey, increment it
  if (keyParts[0] >= dropKeyParts[0]) {
    keyParts[0]++
    return keyParts.join('.')
  }

  return key
}
