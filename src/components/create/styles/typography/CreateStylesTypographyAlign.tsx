import { Button } from '@/components/ui/button'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import StyleLabel from '../StyleLabel'
import { getInitStyle } from '@/lib/sandbox/styles/getInitStyle'

export default function CreateStylesTypographyAlign() {
  const { editorState, updateComponent, getComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [align, setAlign] = useState(
    getInitStyle(selected?.styles, 'textAlign', false, 'start') as string,
  )
  if (!selected) return null
  useEffect(() => {
    setAlign(selected?.styles?.textAlign || 'start')
  }, [selected])
  function handleAlignClick(align: string) {
    if (!selected) return
    setAlign(align)
    updateStyles(
      editorState,
      selected.id,
      { textAlign: align as React.CSSProperties['textAlign'] },
      getComponent,
      updateComponent,
    )
  }
  return (
    <>
      <StyleLabel>Align</StyleLabel>
      <div className="divide-x-1 col-span-3 flex h-6 w-full divide-border overflow-hidden rounded-base border border-border bg-border">
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('start')}
          className={cn('', align === 'start' && 'rounded-base bg-darker')}
        >
          <AlignLeft className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('center')}
          className={cn('', align === 'center' && 'rounded-base bg-darker')}
        >
          <AlignCenter className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('end')}
          className={cn('', align === 'end' && 'rounded-base bg-darker')}
        >
          <AlignRight className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('justify')}
          className={cn('', align === 'stretch' && 'rounded-base bg-darker')}
        >
          <AlignJustify className="size-4" />
        </Button>
      </div>
    </>
  )
}
