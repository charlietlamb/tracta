import { useEffect } from 'react'

export function useScroll(
  bottom: React.RefObject<HTMLDivElement> | null,
  hasNextPage: boolean,
  fetchNextPage: () => void,
) {
  if (!bottom) return
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the bottom is in view and there are more pages, fetch the next page
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1 }, // Call the callback when the bottom is in view
    )

    // Start observing the bottom
    if (bottom.current) {
      observer.observe(bottom.current)
    }

    // Clean up on unmount
    return () => {
      if (bottom.current) {
        observer.unobserve(bottom.current)
      }
    }
  }, [hasNextPage, fetchNextPage])
}
