export function getBottomKey(dropKey: string): string {
  // Split the dropKey into parts
  const parts = dropKey.split('.')

  // Increment the last part
  parts[parts.length - 1] = (parseInt(parts[parts.length - 1]) + 1).toString()

  // Join the parts back together
  return parts.join('.')
}
