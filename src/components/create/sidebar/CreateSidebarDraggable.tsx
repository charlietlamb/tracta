import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from '@hello-pangea/dnd'

export default function CreateSidebarDraggable(, index: number) {
  return (
    <Draggable key={quote.id} draggableId={quote.id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <QuoteItem
          quote={quote}
          isDragging={snapshot.isDragging}
          provided={provided}
        />
      )}
    </Draggable>
  )
}
