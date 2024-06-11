export const handleDragStart = (e: DragEvent, tracta: TractaDraggable) => {
  e.stopPropagation()
  if (!e.dataTransfer) return
  e.dataTransfer.setData('tractaKey', tracta.key)
  console.log(tracta.key)
}
