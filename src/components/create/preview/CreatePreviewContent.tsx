'use client'

import { useEffect, useState } from 'react'
import { useCreateContext } from '../context/createContext'
import Loader from '@/components/general/loading/Loader'
import { getJsonMarkup } from '../../../lib/preview/getJsonMarkup'
import { cn } from '@/lib/utils'

export default function CreatePreviewContent({
  targetRef,
  className,
}: {
  targetRef: React.RefObject<HTMLDivElement>
  className?: string
}) {
  const { json, lastChange, pdf } = useCreateContext()
  const [loading, setLoading] = useState(false)
  const [markup, setMarkup] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    async function update() {
      setLoading(true)
      await getJsonMarkup(json, setMarkup)
      setLoading(false)
    }
    update()
  }, [lastChange])

  return (
    <div>
      <div
        className={cn(
          'relative z-0 w-[794px] bg-white pb-2 font-contract',
          className,
          !pdf && 'z-20',
        )}
        ref={targetRef}
      >
        {loading || !markup ? <Loader /> : markup}
      </div>
    </div>
  )
}
