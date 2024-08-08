import GeneralSelect from '@/components/general/select/GeneralSelect'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { useEditorStore } from '@/state/editor/store'
import { Scan, Square } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CreateStylesBorderRadiusComplex() {
  const { editorState } = useEditorStore((state) => state)
  const selected = editorState.editor.selected
  const [radius, setRadius] = useState<string>(
    typeof editorState.editor.selected?.styles?.borderRadius === 'string'
      ? editorState.editor.selected?.styles?.borderRadius
      : '0px',
  )
  const [radiusMetric, setRadiusMetric] = useState<Metric>('px')

  if (!selected) return null
  return (
    <div className="flex items-start gap-2">
      <Button variant="ghost" className="p-0 text-white">
        <Square />
      </Button>
      <div className="flex flex-grow flex-col">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="p-0 text-white">
            <Scan />
          </Button>
          <Slider
            className="flex-grow"
            max={100}
            step={1}
            value={
              radiusMetric === '%'
                ? [parseInt(radius)]
                : [parseInt(radius) / 20]
            }
            onChange={(e) => {
              console.log(e)
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
      </div>
    </div>
  )
}
