import GeneralSelect from '@/components/general/select/GeneralSelect'
import StyleLabel from '../StyleLabel'
import { BorderMode } from './CreateStylesBorderStyleComplex'
import CreateStylesBorderStyleStyle from './CreateStylesBorderStyleStyle'
import { getMetric } from '@/lib/sandbox/styles/getMetric'
import { getInitStyle } from '@/lib/sandbox/styles/getInitStyle'
import { useEffect, useState } from 'react'
import { useEditorStore } from '@/state/editor/store'
import CreateStylesBorderStyleColor from './CreateStylesBorderStyleColor'

const borderModeMap: Record<BorderMode, keyof React.CSSProperties> = {
  top: 'borderTopWidth',
  bottom: 'borderBottomWidth',
  left: 'borderLeftWidth',
  right: 'borderRightWidth',
  all: 'borderWidth',
}

export default function CreateStylesBorderStyleInput({
  borderMode,
}: {
  borderMode: BorderMode
}) {
  const { editorState } = useEditorStore((state) => state)
  const selected = editorState.editor.selected
  const [width, setWidth] = useState<string>(
    getInitStyle(
      selected?.styles,
      borderModeMap[borderMode],
      true,
      '0',
    ) as string,
  )
  const [widthMetric, setWidthMetric] = useState<Metric>(
    getMetric(selected?.styles, borderModeMap[borderMode]),
  )

  useEffect(() => {
    setWidth(
      getInitStyle(
        selected?.styles,
        borderModeMap[borderMode],
        true,
        '0',
      ) as string,
    )
    setWidthMetric(getMetric(selected?.styles, borderModeMap[borderMode]))
  }, [selected, borderMode])

  return (
    <div className="col-span-2 grid w-full grid-cols-[44px_1fr] items-center gap-y-2">
      <StyleLabel>Style</StyleLabel>
      <CreateStylesBorderStyleStyle borderMode={borderMode} />
      <StyleLabel>Width</StyleLabel>
      <GeneralSelect
        value={width}
        setValue={setWidth}
        metric={widthMetric}
        setMetric={setWidthMetric}
        stylesKey={borderModeMap[borderMode]}
        defaultValue="0"
      />

      <StyleLabel>Color</StyleLabel>
      <CreateStylesBorderStyleColor borderMode={borderMode} />
    </div>
  )
}
