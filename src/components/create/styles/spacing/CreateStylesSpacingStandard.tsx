import { Input } from '@/components/ui/input'
import { extractDigits } from '@/lib/general/extractDigits'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import React, { useEffect, useState } from 'react'

import GeneralSelect from '@/components/general/select/GeneralSelect'

export default function CreateStylesSpacingStandard() {
  const { editorState } = useEditorStore((state) => state)
  const selected = editorState.editor.selected
  const [topMetric, setTopMetric] = useState('px')
  const [bottomMetric, setBottomMetric] = useState('px')
  const [leftMetric, setLeftMetric] = useState('px')
  const [rightMetric, setRightMetric] = useState('px')

  const [top, setTop] = useState<string>(
    extractDigits(
      typeof selected?.styles?.paddingTop === 'string'
        ? selected?.styles?.paddingTop
        : '',
    ),
  )
  const [bottom, setBottom] = useState<string>(
    extractDigits(
      typeof selected?.styles?.paddingBottom === 'string'
        ? selected?.styles?.paddingBottom
        : '',
    ),
  )
  const [left, setLeft] = useState<string>(
    extractDigits(
      typeof selected?.styles?.paddingLeft === 'string'
        ? selected?.styles?.paddingLeft
        : '',
    ),
  )
  const [right, setRight] = useState<string>(
    extractDigits(
      typeof selected?.styles?.paddingRight === 'string'
        ? selected?.styles?.paddingRight
        : '',
    ),
  )

  useEffect(() => {
    setTop(
      extractDigits(
        typeof selected?.styles?.paddingTop === 'string'
          ? selected?.styles?.paddingTop
          : '',
      ),
    )
    setBottom(
      extractDigits(
        typeof selected?.styles?.paddingBottom === 'string'
          ? selected?.styles?.paddingBottom
          : '',
      ),
    )
    setLeft(
      extractDigits(
        typeof selected?.styles?.paddingLeft === 'string'
          ? selected?.styles?.paddingLeft
          : '',
      ),
    )
    setRight(
      extractDigits(
        typeof selected?.styles?.paddingRight === 'string'
          ? selected?.styles?.paddingRight
          : '',
      ),
    )
  }, [selected])

  if (!selected) return null

  return (
    <>
      <h6 className="flex items-center justify-start font-larken">Top</h6>
      <GeneralSelect
        value={top}
        setValue={setTop}
        metric={topMetric}
        setMetric={setTopMetric}
        stylesKey="paddingTop"
        defaultValue="0"
      />
      <h6 className="flex items-center justify-start font-larken">Bottom</h6>
      <GeneralSelect
        value={bottom}
        setValue={setBottom}
        metric={bottomMetric}
        setMetric={setBottomMetric}
        stylesKey="paddingBottom"
        defaultValue="0"
      />
      <h6 className="flex items-center justify-start font-larken">Left</h6>
      <GeneralSelect
        value={left}
        setValue={setLeft}
        metric={leftMetric}
        setMetric={setLeftMetric}
        stylesKey="paddingLeft"
        defaultValue="0"
      />
      <h6 className="flex items-center justify-start font-larken">Right</h6>
      <GeneralSelect
        value={right}
        setValue={setRight}
        metric={rightMetric}
        setMetric={setRightMetric}
        stylesKey="paddingRight"
        defaultValue="0"
      />
    </>
  )
}
