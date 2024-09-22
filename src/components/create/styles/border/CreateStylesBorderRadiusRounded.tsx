import GeneralSelect from '@/components/general/select/GeneralSelect'
import { getInitStyle } from '@/lib/sandbox/styles/getInitStyle'
import { getMetric } from '@/lib/sandbox/styles/getMetric'
import { useEditorStore } from '@/state/editor/store'
import { UserRoundSearch } from 'lucide-react'
import React, { useState } from 'react'

export default function CreateStylesBorderRadiusRounded() {
  const { editorState } = useEditorStore((state) => state)

  const [topLeft, setTopLeft] = useState<string>(
    getInitStyle(editorState.editor.selected?.styles, 'borderTopLeftRadius'),
  )
  const [topLeftMetric, setTopLeftMetric] = useState<Metric>(
    getMetric(editorState.editor.selected?.styles, 'borderTopLeftRadius'),
  )

  const [topRight, setTopRight] = useState<string>(
    getInitStyle(editorState.editor.selected?.styles, 'borderTopRightRadius'),
  )
  const [topRightMetric, setTopRightMetric] = useState<Metric>(
    getMetric(editorState.editor.selected?.styles, 'borderTopRightRadius'),
  )

  const [bottomLeft, setBottomLeft] = useState<string>(
    getInitStyle(editorState.editor.selected?.styles, 'borderBottomLeftRadius'),
  )
  const [bottomLeftMetric, setBottomLeftMetric] = useState<Metric>(
    getMetric(editorState.editor.selected?.styles, 'borderBottomLeftRadius'),
  )

  const [bottomRight, setBottomRight] = useState<string>(
    getInitStyle(
      editorState.editor.selected?.styles,
      'borderBottomRightRadius',
    ),
  )
  const [bottomRightMetric, setBottomRightMetric] = useState<Metric>(
    getMetric(editorState.editor.selected?.styles, 'borderBottomRightRadius'),
  )

  return (
    <div className="grid grid-cols-2 gap-2">
      <GeneralSelect
        value={topLeft}
        setValue={setTopLeft}
        metric={topLeftMetric}
        setMetric={setTopLeftMetric}
        stylesKey="borderTopLeftRadius"
        defaultValue="0"
      />
      <GeneralSelect
        value={topRight}
        setValue={setTopRight}
        metric={topRightMetric}
        setMetric={setTopRightMetric}
        stylesKey="borderTopRightRadius"
        defaultValue="0"
      />
      <GeneralSelect
        value={bottomLeft}
        setValue={setBottomLeft}
        metric={bottomLeftMetric}
        setMetric={setBottomLeftMetric}
        stylesKey="borderBottomLeftRadius"
        defaultValue="0"
      />
      <GeneralSelect
        value={bottomRight}
        setValue={setBottomRight}
        metric={bottomRightMetric}
        setMetric={setBottomRightMetric}
        stylesKey="borderBottomRightRadius"
        defaultValue="0"
      />
    </div>
  )
}
