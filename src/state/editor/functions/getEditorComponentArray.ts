export default function getEditorComponentArray(
  components: TractaComponent[],
): TractaComponent[] {
  const ids: TractaComponent[] = []

  function collectIds(component: TractaComponent) {
    ids.push(component)
    if (Array.isArray(component.content)) {
      for (const child of component.content) {
        collectIds(child)
      }
    }
  }

  for (const component of components) {
    collectIds(component)
  }

  return ids
}
