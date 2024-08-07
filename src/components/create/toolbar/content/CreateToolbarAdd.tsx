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

export default function CreateToolbarAdd() {
  const { editorState, addComponent } = useEditorStore((state) => state)
  const { setMode } = useSandboxStore((state) => state)
  const selected =
    editorState.editor.selected?.id || editorState.editor.components[0].id
  return (
    <Accordion
      type="multiple"
      defaultValue={['components']}
      className="bg-dark text-light divide-border border-border absolute bottom-0 left-[100%] top-0 z-50 flex h-full w-60 flex-col divide-y rounded-none border-x !border-t-0 shadow-none transition"
    >
      <AccordionItem
        value="components"
        className="bg-dark text-light divide-border divide-y rounded-none rounded-b-none border-none shadow-none"
      >
        <AccordionTrigger className="border-none bg-transparent p-0 px-2 font-larken text-xl shadow-none">
          Components
        </AccordionTrigger>
        <AccordionContent className="bg-dark grid auto-rows-min grid-cols-3 gap-0 rounded-b-none p-0">
          {Components.map((component, index) => (
            <div
              key={component.id}
              className={cn(
                'border-border hover:bg-border flex h-20 w-20 cursor-pointer flex-col items-center justify-center border-b p-2 text-white transition',
                index % 3 === 1 && 'border-border border-x',
              )}
              onClick={() => {
                {
                  addComponent(
                    editorState,
                    { ...component.component, id: uuidv4() },
                    selected,
                  )
                  setMode(null)
                }
              }}
            >
              {component.icon}
              <p className="text-light font-larken">{component.text}</p>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
