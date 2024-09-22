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
import { getFreshComponent } from '@/lib/sandbox/components/functions/getFreshComponent'

export default function CreateToolbarAdd() {
  const { editorState, addComponent } = useEditorStore((state) => state)
  const { setMode } = useSandboxStore((state) => state)
  const selected =
    editorState.editor.selected?.id || editorState.editor.components[0].id
  return (
    <Accordion
      type="multiple"
      defaultValue={['components']}
      className="absolute bottom-0 left-[100%] top-0 z-50 flex h-full w-60 flex-col divide-y divide-border rounded-none border-x !border-t-0 border-border bg-dark text-light shadow-none transition"
    >
      <AccordionItem
        value="components"
        className="divide-y divide-border rounded-none rounded-b-none border-none bg-dark text-light shadow-none"
      >
        <AccordionTrigger className="border-none bg-transparent px-2 py-1 font-larken text-xl text-white shadow-none">
          Components
        </AccordionTrigger>
        <AccordionContent className="grid auto-rows-min grid-cols-3 gap-0 rounded-b-none bg-dark p-0">
          {Components.map((component, index) => (
            <div
              key={component.id}
              className={cn(
                'flex h-20 w-20 cursor-pointer flex-col items-center justify-center border-b border-border p-2 text-light transition hover:bg-border',
                index % 3 === 1 && 'border-x border-border',
              )}
              onClick={() => {
                {
                  addComponent(
                    editorState,
                    getFreshComponent(component.component),
                    selected,
                  )
                  setMode(null)
                }
              }}
            >
              {component.icon}
              <p className="text-xs text-white/80">{component.text}</p>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
