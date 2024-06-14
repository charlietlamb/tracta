import React from 'react'
import CreateSidebarWidget from './CreateSidebarWidget'
import { Accordion } from '@/components/ui/accordion'

export default function CreateSidebarDrag({
  contractTree,
}: {
  contractTree: TractaDraggable[]
}) {
  console.log(contractTree)
  return (
    <Accordion type="multiple" className="w-full">
      {contractTree.map((c) => {
        return (
          <React.Fragment key={c.key}>
            <CreateSidebarWidget contract={c}>
              {c.children ? (
                <CreateSidebarDrag contractTree={c.children} />
              ) : null}
            </CreateSidebarWidget>
          </React.Fragment>
        )
      })}
    </Accordion>
  )
}
