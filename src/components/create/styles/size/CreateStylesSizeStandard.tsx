import { Input } from '@/components/ui/input'
import { extractDigits } from '@/lib/general/extractDigits'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import React, { useEffect, useState } from 'react'

import GeneralSelect from '@/components/general/select/GeneralSelect'

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
      <h6 className="flex items-center justify-start font-larken">Width</h6>
      <GeneralSelect
        value={width}
        setValue={setWidth}
        metric={widthMetric}
        setMetric={setWidthMetric}
        stylesKey="width"
      />
      <h6 className="flex items-center justify-start font-larken">Height</h6>
      <GeneralSelect
        value={height}
        setValue={setHeight}
        metric={heightMetric}
        setMetric={setHeightMetric}
        stylesKey="height"
      />
    </>
  )
}
