export default function getComponent(
  components: TractaComponent[],
  id: string,
): TractaComponent | undefined {
  console.log(components)
  console.log(id)

  for (const item of components) {
    if (item.id === id) {
      console.log('equal')
      return item
    } else if (item.content && Array.isArray(item.content)) {
      const found = getComponent(item.content, id)
      if (found) {
        return found
      }
    }
  }

  return undefined
}
