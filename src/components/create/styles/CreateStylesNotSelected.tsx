import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/state/editor/store'
import { PencilRuler } from 'lucide-react'
import React from 'react'

export default function CreateStylesNotSelected() {
  const { editorState, setEditorState } = useEditorStore((state) => state)
  return (
    <div className="text-light flex flex-col items-center gap-2 p-2 text-center font-larken">
      <div className="bg-darker border-border flex flex-col items-center border p-2">
        <PencilRuler className="size-12" strokeWidth={1} />
        <p className="text-xl font-light">
          Please select a component to edit styles.
        </p>
      </div>
      <Button
        variant="noShadow"
        className="border-border text-darker w-full rounded-none border hover:bg-accent"
        onClick={() =>
          setEditorState({
            ...editorState,
            editor: {
              ...editorState.editor,
              selected: editorState.editor.components[0],
            },
          })
        }
      >
        Select Document Body
      </Button>
    </div>
  )
}
