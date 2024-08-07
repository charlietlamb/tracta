import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/state/editor/store'
import { Redo2, Undo2 } from 'lucide-react'
import React from 'react'

export default function CreateHeaderUndo() {
  const { editorState, setEditorState, undo, redo } = useEditorStore(
    (state) => state,
  )
  return (
    <div className="flex items-center">
      <Button
        className="px-2 text-white"
        variant="ghost"
        onClick={() => undo(editorState)}
        disabled={editorState.history.index === 0}
      >
        <Undo2 className="size-5" />
      </Button>
      <Button
        className="px-2 text-white"
        variant="ghost"
        onClick={() => redo(editorState)}
        disabled={
          editorState.history.index === editorState.history.editors.length - 1
        }
      >
        <Redo2 className="size-5" />
      </Button>
    </div>
  )
}
