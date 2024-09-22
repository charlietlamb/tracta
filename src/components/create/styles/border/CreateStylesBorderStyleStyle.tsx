import { Button } from '@/components/ui/button'
import { BorderMode } from './CreateStylesBorderStyleComplex'
import { cn } from '@/lib/utils'
import { CircleDashed, Ellipsis, Minus, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useEditorStore } from '@/state/editor/store'
import { getInitStyle } from '@/lib/sandbox/styles/getInitStyle'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'

type BorderStyle = 'none' | 'dotted' | 'dashed' | 'solid'

const borderModeMap: Record<BorderMode, keyof React.CSSProperties> = {
  top: 'borderTopStyle',
  bottom: 'borderBottomStyle',
  left: 'borderLeftStyle',
  right: 'borderRightStyle',
  all: 'borderStyle',
}

export default function CreateStylesBorderStyleStyle({
  borderMode,
}: {
  borderMode: BorderMode
}) {
  const { editorState, updateComponent, getComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [style, setStyle] = useState<BorderStyle>(
    getInitStyle(
      selected?.styles,
      borderModeMap[borderMode],
      false,
      'none',
    ) as BorderStyle,
  )
  function handleStyleClick(style: BorderStyle) {
    if (!selected) return
    setStyle(style)
    updateStyles(
      editorState,
      selected.id,
      { [borderModeMap[borderMode]]: style },
      getComponent,
      updateComponent,
    )
  }

  useEffect(() => {
    setStyle(
      getInitStyle(
        selected?.styles,
        borderModeMap[borderMode],
        false,
        'none',
      ) as BorderStyle,
    )
  }, [selected, borderMode])

  return (
    <div className="divide-x-1 flex h-6 w-full divide-border overflow-hidden rounded-base border border-border bg-border">
      <Button
        variant="align"
        size="align"
        onClick={() => handleStyleClick('none')}
        className={cn('', style === 'none' && 'rounded-base bg-darker')}
      >
        <X className="size-4" />
      </Button>
      <Button
        variant="align"
        size="align"
        onClick={() => handleStyleClick('solid')}
        className={cn('', style === 'solid' && 'rounded-base bg-darker')}
      >
        <Minus className="size-4" />
      </Button>
      <Button
        variant="align"
        size="align"
        onClick={() => handleStyleClick('dashed')}
        className={cn('', style === 'dashed' && 'rounded-base bg-darker')}
      >
        <CircleDashed className="size-4" />
      </Button>
      <Button
        variant="align"
        size="align"
        onClick={() => handleStyleClick('dotted')}
        className={cn('', style === 'dotted' && 'rounded-base bg-darker')}
      >
        <Ellipsis className="size-4" />
      </Button>
    </div>
  )
}
