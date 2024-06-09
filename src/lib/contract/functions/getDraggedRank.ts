export function getDraggedRank(rank: string, level: number): string {
  // Split the rank string into an array of strings
  const parts = rank.split('.')

  // Check if the level index exists in the parts array
  if (level < parts.length) {
    // Convert the part at the specified level to an integer, increment it, and convert it back to a string
    parts[level] = (parseInt(parts[level]) + 1).toString()
  } else {
    // If the level index doesn't exist, append a new part with the value '1'
    parts.push('1')
  }

  // Join the parts back into a string
  const newRank = parts.join('.')

  return newRank
}
