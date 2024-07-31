import { useEffect, useState } from 'react'
import { useCreateContext } from '../context/createContext'
import Loader from '@/components/general/loading/Loader'
import { getJsonMarkup } from '../../../lib/preview/getJsonMarkup'
import { cn } from '@/lib/utils'

export default function CreatePreviewContent({
  targetRef,
  className,
  preview = false,
}: {
  targetRef: React.RefObject<HTMLDivElement>
  className?: string
  preview?: boolean
}) {
  const { json, lastChange } = useCreateContext()
  const [loading, setLoading] = useState(false)
  const [markup, setMarkup] = useState<React.ReactNode | null>(null)
  let [length, setLength] = useState(0)

  useEffect(() => {
    async function update() {
      setLoading(true)
      await getJsonMarkup(json, setMarkup, length, setLength)
      setLoading(false)
    }
    update()
  }, [lastChange])

  return (
    <div
      className={cn('w-[794px] pb-2 font-contract', className)}
      ref={targetRef}
    >
      {loading || !markup ? <Loader /> : markup}
    </div>
  )
}
