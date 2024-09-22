import { extractDigits } from '@/lib/general/extractDigits'
import { CSSProperties } from 'react'

export function getInitStyle(
  styles: React.CSSProperties | undefined,
  key: string,
  extractDigitsOn: boolean = true,
  defaultValue: string = '0',
): string {
  if (!styles) return defaultValue
  const value = styles[key as keyof CSSProperties]
  return typeof value === 'string'
    ? extractDigitsOn
      ? extractDigits(value)
      : value
    : defaultValue
}
