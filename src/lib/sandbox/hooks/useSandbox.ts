import { useEffect } from 'react'
import { OnRefChangeType } from 'react-resize-detector/build/types/types'

export function useSandbox(
  width: number | undefined,
  height: number | undefined,
  ref: OnRefChangeType<any>,
  pages: number,
  setWidth: (width: number) => void,
) {
  useEffect(() => {
    if (!ref.current || !width || !height) return
    const a4 = 210 / 297
    const pageHeight = width / a4
    ref.current!.style.height = `${pages * pageHeight}px`
    ref.current!.style.minHeight = `${pages * pageHeight}px`
    setWidth(width)
  }, [width, height])
}
