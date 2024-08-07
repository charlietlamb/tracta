import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/state/editor/store'

export default function DeleteComponent() {
  const { editorState, deleteComponent, setEditorState } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  if (!selected || selected.tracta === 'body') return null
  return (
    <div className="flex w-full p-2">
      {' '}
      <Button
        className="hover:text-darker hover:border-darker bg-darker border-border w-full border text-red-500 hover:bg-red-500"
        variant="noShadow"
        onClick={() => {
          deleteComponent(editorState, selected)
          setEditorState({
            ...editorState,
            editor: { ...editorState.editor, selected: null },
          })
        }}
      >
        Delete Component
      </Button>
    </div>
  )
}
