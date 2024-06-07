import { useEffect } from 'react'

export function useScrollbar(open: boolean) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('body-no-margin')
    } else {
      document.body.classList.remove('body-no-margin')
    }
  }, [open])
}
