import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/state/editor/store'
import { Eye, EyeOff } from 'lucide-react'
import React from 'react'

export default function CreateHeaderLive() {
  const { editorState, toggleLiveMode } = useEditorStore((state) => state)
  const liveMode = editorState.editor.liveMode
  const iconClassName = 'size-5'
  return (
    <div className="flex items-center">
      <Button onClick={() => toggleLiveMode(editorState)} variant="ghostHeader">
        {liveMode ? (
          <Eye className={iconClassName} />
        ) : (
          <EyeOff className={iconClassName} />
        )}
      </Button>
    </div>
  )
}
