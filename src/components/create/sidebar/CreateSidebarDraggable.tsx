import React from 'react'

export default function CreateSidebarDraggable({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="border border-black bg-bg p-2 text-lg font-bold">
      {children}
    </div>
  )
}
