'use client'

import CreateToolbar from './toolbar/CreateToolbar'
import CreateSandbox from './sandbox/CreateSandbox'
import CreateStyles from './styles/CreateStyles'
import { useEditorStore } from '@/state/editor/store'
import CreateHeader from './header/CreateHeader'

export default function Create({ editor }: { editor: EditorState | null }) {
  const { setEditorState } = useEditorStore((state) => state)
  if (editor) setEditorState(editor)
  return (
    <div className="divide-border flex h-screen flex-col divide-y overflow-hidden ">
      <CreateHeader />
      <div className="divide-border flex w-full max-w-full flex-grow divide-x">
        <CreateToolbar />
        <CreateSandbox />
        <CreateStyles />
      </div>
    </div>
  )
}
