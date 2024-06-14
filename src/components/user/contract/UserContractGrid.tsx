import { useScroll } from '@/hooks/scroll/useScroll'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { useUserContext } from '../context/userContext'
import { Input } from '@/components/ui/input'
import InfiniteEmpty from '@/components/query/InfiniteEmpty'
import InfiniteLoader from '@/components/query/InfiniteLoader'
import Contract from '@/components/account/contracts/Contract'
import { getAccountContracts } from '@/lib/get/account/contract/getAccountContracts'

export default function UserContractGrid() {
  const { user } = useUserContext()
  const [contracts, setComponents] = useState<Component[]>([])
  const [search, setSearch] = useState('')
  const bottom = useRef<HTMLDivElement>(null)
  const {
    data: contractPages,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) =>
      getAccountContracts(pageParam, user, search),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined
      return allPages.length + 1
    },
  })
  useEffect(() => {
    if (contractPages && status === 'success')
      setComponents(contractPages.pages.flat())
  }, [contractPages])

  useEffect(() => {
    refetch()
  }, [search])
  useScroll(bottom, hasNextPage, fetchNextPage)
  return (
    <>
      <Input
        placeholder="Search contracts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {contracts.map((contract: Component) => (
          <Contract key={contract.id} contract={contract} />
        ))}
      </div>
      <InfiniteEmpty empty={contracts.length === 0 && search.length !== 0} />
      <InfiniteLoader isFetchingNextPage={isFetchingNextPage} />
      <div ref={bottom}></div>
    </>
  )
}
