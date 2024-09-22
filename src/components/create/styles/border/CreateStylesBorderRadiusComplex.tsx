import GeneralSelect from '@/components/general/select/GeneralSelect'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { extractDigits } from '@/lib/general/extractDigits'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { Scan, Square } from 'lucide-react'
import { useEffect, useState } from 'react'
import CreateStylesBorderRadiusRounded from './CreateStylesBorderRadiusRounded'

export default function CreateStylesBorderRadiusComplex() {
  const { editorState } = useEditorStore((state) => state)
  const selected = editorState.editor.selected
  const [all, setAll] = useState(true)
  const [radius, setRadius] = useState<string>(
    typeof editorState.editor.selected?.styles?.borderRadius === 'string'
      ? extractDigits(editorState.editor.selected?.styles?.borderRadius)
      : '0',
  )
  const [radiusMetric, setRadiusMetric] = useState<Metric>(
    typeof editorState.editor.selected?.styles?.borderRadius === 'string' &&
      editorState.editor.selected?.styles?.borderRadius.includes('%')
      ? '%'
      : 'px',
  )

  if (!selected) return null
  return (
    <div className="flex items-center gap-0.5">
      <Button
        variant="ghost"
        className={cn(
          'mb-auto size-6 p-1 text-white hover:bg-border/50 hover:text-white',
          all && 'hover:bg-borer/30 bg-border/50',
        )}
        onClick={() => setAll(true)}
      >
        <Square />
      </Button>
      <div className="flex flex-grow flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className={cn(
              'size-6 p-1 text-white hover:bg-border/50 hover:text-white',
              !all && 'bg-border/50 hover:bg-border/30',
            )}
            onClick={() => setAll(false)}
          >
            <Scan />
          </Button>
          <Slider
            className="flex-grow"
            max={100}
            step={1}
            // defaultValue={[50]}
            defaultValue={[parseInt(radius)]}
            onValueChange={(e) => {
              setRadius(e[0].toString())
              console.log(e[0])
            }}
          />
          <GeneralSelect
            value={radius}
            setValue={setRadius}
            metric={radiusMetric}
            setMetric={setRadiusMetric}
            defaultValue="0"
            stylesKey="borderRadius"
            className="w-[71.5px] !min-w-[71.5px]"
          />
        </div>
        {!all && <CreateStylesBorderRadiusRounded />}
      </div>
    </div>
  )
}
