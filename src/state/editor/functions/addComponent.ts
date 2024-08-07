export default function addComponent(
  components: TractaComponent[],
  component: TractaComponent,
  containerId: string,
): TractaComponent[] {
  return components.map((item) => {
    if (item.id === containerId && Array.isArray(item.content)) {
      return {
        ...item,
        content: [...item.content, component],
      }
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: addComponent(item.content, component, containerId),
      }
    }
    return item
  })
}
