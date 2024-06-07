import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function InfiniteLoader({
  isFetchingNextPage,
}: {
  isFetchingNextPage: boolean
}) {
  if (!isFetchingNextPage) return null
  return (
    <div className="flex w-full items-center justify-center py-4">
      <LoaderCircle className="animate-spin" />
    </div>
  )
}
