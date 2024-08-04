import { useCreateContext } from '@/components/create/context/createContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect } from 'react'

export default function CreateSidebarTypographyAlign({
  align,
  setAlign,
}: {
  align: string
  setAlign: Dispatch<SetStateAction<string>>
}) {
  const { key, index, setJson, setLastChange, json } = useCreateContext()
  useEffect(() => {
    const newJson = JSON.parse(JSON.stringify(json))
    newJson[key][index].style.alignItems = align
    setJson(newJson)
    setLastChange(Date.now())
  }, [align])
  return (
    <div className="flex w-full items-center gap-1">
      <h6 className="text-sm font-light">Align</h6>
      <div className="border-border divide-x-1 divide-border flex h-6 w-full overflow-hidden rounded-base border">
        <Button
          variant="align"
          size="align"
          onClick={() => setAlign('start')}
          className={cn('', align === 'start' && 'bg-border')}
        >
          <AlignLeft className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => setAlign('center')}
          className={cn('', align === 'center' && 'bg-border')}
        >
          <AlignCenter className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => setAlign('end')}
          className={cn('', align === 'end' && 'bg-border')}
        >
          <AlignRight className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => setAlign('stretch')}
          className={cn('', align === 'stretch' && 'bg-border')}
        >
          <AlignJustify className="size-4" />
        </Button>
      </div>
    </div>
  )
}
