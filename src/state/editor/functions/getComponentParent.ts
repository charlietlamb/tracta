export default function getComponentParent(
  components: TractaComponent[],
  parent: TractaComponent,
  component: TractaComponent,
): TractaComponent | null {
  for (const item of components) {
    if (item.id === component.id) return parent
    if (Array.isArray(item.content)) {
      const found = getComponentParent(item.content, item, component)
      if (found) return found
    }
  }
  return null
}
