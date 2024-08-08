import { Button } from '@/components/ui/button'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function CreateStylesTypographyAlign() {
  const { editorState, updateComponent, getComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [align, setAlign] = useState('start')
  if (!selected) return null
  function handleAlignClick(align: string) {
    if (!selected) return
    setAlign(align)
    updateStyles(
      editorState,
      selected.id,
      { alignItems: align },
      getComponent,
      updateComponent,
    )
  }
  return (
    <>
      <h6 className="flex items-center justify-start font-larken">Align</h6>
      <div className="border-border divide-x-1 divide-border bg-border col-span-3 flex h-6 w-full overflow-hidden rounded-base border">
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('start')}
          className={cn('', align === 'start' && 'bg-darker rounded-base')}
        >
          <AlignLeft className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('center')}
          className={cn('', align === 'center' && 'bg-darker rounded-base')}
        >
          <AlignCenter className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('end')}
          className={cn('', align === 'end' && 'bg-darker rounded-base')}
        >
          <AlignRight className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('stretch')}
          className={cn('', align === 'stretch' && 'bg-darker rounded-base')}
        >
          <AlignJustify className="size-4" />
        </Button>
      </div>
    </>
  )
}
