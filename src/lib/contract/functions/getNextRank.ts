export function getNextRank(rank: string): string {
  // Split the rank string into an array of strings
  const parts = rank.split('.')

  // Convert the last part to an integer, increment it, and convert it back to a string
  parts[parts.length - 1] = (parseInt(parts[parts.length - 1]) + 1).toString()

  // Join the parts back into a string
  const newRank = parts.join('.')

  return newRank
}
