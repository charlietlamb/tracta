import React from 'react'
import CreateSidebarWidget from './CreateSidebarWidget'
import CreateSidebarDropzone from './CreateSidebarDropzone'

export default function CreateSidebarDrag({
  contractArray,
}: {
  contractArray: TractaDraggable[]
}) {
  return (
    <>
      {contractArray.map((c) => {
        return (
          <React.Fragment key={c.key}>
            <CreateSidebarDropzone contract={c} />
            <CreateSidebarWidget contract={c}>
              {c.children ? (
                <CreateSidebarDrag contractArray={c.children} />
              ) : null}
            </CreateSidebarWidget>
          </React.Fragment>
        )
      })}
    </>
  )
}
