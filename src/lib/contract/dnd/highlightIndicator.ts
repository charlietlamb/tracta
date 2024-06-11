import { clearHighlights } from './clearHighlights'
import { getIndicators } from './getIndicators'
import { getNearestIndicator } from './getNearestIndicator'

export const highlightIndicator = (e: DragEvent) => {
  const indicators = getIndicators()

  clearHighlights(indicators)

  const el = getNearestIndicator(e, indicators)

  el.element.style.opacity = '1'
}
