export default function deleteComponent(
  components: TractaComponent[],
  component: TractaComponent,
): TractaComponent[] {
  return components.filter((item) => {
    if (item.id === component.id) {
      return false
    } else if (item.content && Array.isArray(item.content)) {
      item.content = deleteComponent(item.content, component)
    }
    return true
  })
}
