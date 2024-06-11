import InfiniteLoader from '@/components/query/InfiniteLoader'
import { useScroll } from '@/hooks/scroll/useScroll'
import { getComponents } from '@/lib/query/components/getComponents'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import CreateComponent from './CreateComponent'
import { Input } from '@/components/ui/input'
import InfiniteEmpty from '@/components/query/InfiniteEmpty'

export default function CreateComponentGrid() {
  const [components, setComponents] = useState<Component[]>([])
  const [search, setSearch] = useState('')
  const bottom = useRef<HTMLDivElement>(null)
  const {
    data: userPages,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) => getComponents(pageParam, search),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined
      return allPages.length + 1
    },
  })
  useEffect(() => {
    if (userPages && status === 'success') setComponents(userPages.pages.flat())
  }, [userPages])

  useEffect(() => {
    refetch()
  }, [search])
  useScroll(bottom, hasNextPage, fetchNextPage)
  return (
    <>
      <Input
        placeholder="Search components"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {components.map((component: Component) => (
          <CreateComponent key={component.id} component={component} />
        ))}
      </div>
      <InfiniteEmpty empty={components.length === 0 && search.length !== 0} />
      <InfiniteLoader isFetchingNextPage={isFetchingNextPage} />
      <div ref={bottom}></div>
    </>
  )
}
