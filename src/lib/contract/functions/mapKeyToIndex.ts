export function mapKeyToIndex(key: string): number[] {
  return key.split('.').map((part) => parseInt(part, 10) - 1)
}
