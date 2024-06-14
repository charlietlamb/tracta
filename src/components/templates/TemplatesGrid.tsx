'use client'

import { useScroll } from '@/hooks/scroll/useScroll'
import { getTemplates } from '@/lib/query/templates/getTemplates'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { Input } from '../ui/input'
import InfiniteEmpty from '../query/InfiniteEmpty'
import InfiniteLoader from '../query/InfiniteLoader'
import Contract from '../account/contracts/Contract'

export default function TemplatesGrid() {
  const [templates, setTemplates] = useState<ContractData[]>([])
  const [search, setSearch] = useState('')
  const bottom = useRef<HTMLDivElement>(null)
  const {
    data: templatePages,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['templates'],
    queryFn: ({ pageParam = 1 }) => getTemplates(pageParam, search),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined
      return allPages.length + 1
    },
  })
  useEffect(() => {
    if (templatePages && status === 'success')
      setTemplates(templatePages.pages.flat())
  }, [templatePages])

  useEffect(() => {
    refetch()
  }, [search])
  useScroll(bottom, hasNextPage, fetchNextPage)
  return (
    <>
      <Input
        placeholder="Search templates"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {templates.map((template: Component) => (
          <Contract key={template.id} contract={template} />
        ))}
      </div>
      <InfiniteEmpty empty={templates.length === 0 && search.length !== 0} />
      <InfiniteLoader isFetchingNextPage={isFetchingNextPage} />
      <div ref={bottom}></div>
    </>
  )
}
