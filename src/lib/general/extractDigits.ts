export const extractDigits = (value: string | undefined): string => {
  if (!value) return ''
  const match = value.match(/\d+/g)
  return match ? match.join('') : ''
}
