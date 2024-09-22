export default function getNumParents(
  components: TractaComponent[],
  component: TractaComponent,
  initParents: number = 0,
): number | null {
  for (const comp of components) {
    if (comp.id === component.id) return initParents
    if (!Array.isArray(comp.content)) return null
    const res: number | null = getNumParents(
      comp.content,
      component,
      initParents + 1,
    )
    if (res) return res
  }
  return null
}
