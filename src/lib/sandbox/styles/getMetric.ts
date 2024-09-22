import { CSSProperties } from 'react'

export function getMetric(
  styles: React.CSSProperties | undefined,
  key: string,
): Metric {
  if (!styles) return 'px'
  const value = styles[key as keyof CSSProperties]
  return typeof value === 'string' && value?.includes('%') ? '%' : 'px'
}
