import { Button } from '@/components/ui/button'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { ArrowDown, ArrowRight, ArrowRightLeft } from 'lucide-react'
import { useState } from 'react'

export default function CreateStylesLayoutFlex() {
  const { editorState, updateComponent, getComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const initFlex =
    typeof selected?.styles?.flexDirection !== 'string'
      ? 'col'
      : selected?.styles?.flexDirection === 'row' && selected?.styles?.flexWrap
        ? 'wrap'
        : selected?.styles?.flexDirection
  const [flex, setFlex] = useState(initFlex)
  if (!selected) return null
  function handleAlignClick(flex: string) {
    if (!selected) return
    setFlex(flex)
    let newStyles = {}
    if (flex === 'row') newStyles = { flexDirection: 'row' }
    if (flex === 'column') newStyles = { flexDirection: 'column' }
    if (flex === 'wrap') newStyles = { flexDirection: 'row', flexWrap: 'wrap' }
    updateStyles(
      editorState,
      selected.id,
      newStyles,
      getComponent,
      updateComponent,
    )
  }
  return (
    <>
      <h6 className="flex items-center justify-start font-larken">Route</h6>
      <div className="border-border divide-x-1 divide-border bg-border col-span-3 flex h-6 w-full overflow-hidden rounded-base border">
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('row')}
          className={cn('', flex === 'row' && 'bg-darker rounded-base')}
        >
          <ArrowRight className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('column')}
          className={cn('', flex === 'column' && 'bg-darker rounded-base')}
        >
          <ArrowDown className="size-4" />
        </Button>
        <Button
          variant="align"
          size="align"
          onClick={() => handleAlignClick('wrap')}
          className={cn('', flex === 'wrap' && 'bg-darker rounded-base')}
        >
          <ArrowRightLeft className="size-4" />
        </Button>
      </div>
    </>
  )
}
