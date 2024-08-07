export default function updateComponent(
  components: TractaComponent[],
  component: TractaComponent,
): TractaComponent[] {
  return components.map((item) => {
    if (item.id === component.id) {
      return { ...item, ...component }
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: updateComponent(item.content, component),
      }
    }
    return item
  })
}
