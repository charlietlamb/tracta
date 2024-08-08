import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Components } from '@/lib/sandbox/Components'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { useSandboxStore } from '@/state/sandbox/store'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'

export default function CreateToolbarOrder() {
  const { editorState, addComponent } = useEditorStore((state) => state)
  const { setMode } = useSandboxStore((state) => state)
  const selected =
    editorState.editor.selected?.id || editorState.editor.components[0].id
  return (
    <div className="bg-dark text-light divide-border border-border absolute bottom-0 left-[100%] top-0 z-50 flex h-full w-60 flex-col divide-y rounded-none border-x !border-t-0 shadow-none transition">
      <h4 className="px-2 py-1 font-larken text-xl font-bold text-white">
        Reorder
      </h4>
      <div></div>
    </div>
  )
}
