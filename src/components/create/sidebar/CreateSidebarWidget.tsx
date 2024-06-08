import { Droppable, Draggable } from '@hello-pangea/dnd'

export default function CreateSidebarWidget({
  contract,
}: {
  contract: [string, Tracta]
}) {
  return (
    <div className="border border-black bg-bg p-2">
      <span className="font-bold">{contract[0] + ' '}</span>
      {contract[1].values[0]}
    </div>
  )
}
