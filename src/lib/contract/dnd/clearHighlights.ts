import { getIndicators } from './getIndicators'

export const clearHighlights = (els?: HTMLElement[]) => {
  const indicators = els || getIndicators()

  indicators.forEach((i) => {
    i.style.opacity = '0'
  })
}
