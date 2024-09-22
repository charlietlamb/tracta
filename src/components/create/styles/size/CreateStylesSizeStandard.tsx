import { Input } from '@/components/ui/input'
import { extractDigits } from '@/lib/general/extractDigits'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import React, { useEffect, useState } from 'react'

import GeneralSelect from '@/components/general/select/GeneralSelect'
import StyleLabel from '../StyleLabel'

export default function CreateStylesSizeStandard() {
  const { editorState, getComponent, updateComponent } = useEditorStore(
    (state) => state,
  )
  const [widthMetric, setWidthMetric] = useState<Metric>('%')
  const [heightMetric, setHeightMetric] = useState<Metric>('%')
  const selected = editorState.editor.selected
  const [width, setWidth] = useState<string>(
    extractDigits(
      typeof selected?.styles?.width === 'string'
        ? selected?.styles?.width
        : '100',
    ),
  )
  const [height, setHeight] = useState<string>(
    extractDigits(
      typeof selected?.styles?.height === 'string'
        ? selected?.styles?.height
        : '100',
    ),
  )

  useEffect(() => {
    setWidth(
      extractDigits(
        typeof selected?.styles?.width === 'string'
          ? selected?.styles?.width
          : '100',
      ),
    )
    setHeight(
      extractDigits(
        typeof selected?.styles?.height === 'string'
          ? selected?.styles?.height
          : '100',
      ),
    )
  }, [selected])
  if (!selected) return null
  return (
    <>
      <StyleLabel>Width</StyleLabel>
      <GeneralSelect
        value={width}
        setValue={setWidth}
        metric={widthMetric}
        setMetric={setWidthMetric}
        stylesKey="width"
      />
      <StyleLabel>Height</StyleLabel>
      <GeneralSelect
        value={height}
        setValue={setHeight}
        metric={heightMetric}
        setMetric={setHeightMetric}
        stylesKey="height"
        defaultValue="auto"
      />
    </>
  )
}
