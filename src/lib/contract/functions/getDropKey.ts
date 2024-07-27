export default function getDropKey(keyString: string): string {
  const baseString = keyString.split('b-')[1]
  const segments = baseString.split('.')
  const lastSegment = segments.pop() // Remove the last segment
  if (lastSegment !== undefined) {
    const incremented = parseInt(lastSegment, 10) + 1 // Increment the last segment
    segments.push(incremented.toString()) // Add the incremented segment back
  }
  return segments.join('.') // Join the segments back together
}
