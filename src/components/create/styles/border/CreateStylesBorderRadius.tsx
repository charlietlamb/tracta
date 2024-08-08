import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import { useEffect, useState } from 'react'
import CreateStylesBorderRadiusComplex from './CreateStylesBorderRadiusComplex'
export default function CreateStylesBorderRadius() {
  const { editorState, updateComponent, getComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [color, setColor] = useState(selected?.styles?.color || '#000000')
  if (!selected) return null
  useEffect(() => {
    setColor(selected?.styles?.color || '#000000')
  }, [selected])

  return (
    <>
      <h6 className="flex items-center justify-start font-larken">Color</h6>
      <CreateStylesBorderRadiusComplex />
    </>
  )
}
