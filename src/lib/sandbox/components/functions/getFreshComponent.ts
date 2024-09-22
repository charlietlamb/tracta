import { v4 as uuidv4 } from 'uuid'

export function getFreshComponent(component: TractaComponent): TractaComponent {
  return {
    ...component,
    id: uuidv4(),
    content: Array.isArray(component.content)
      ? component.content.map((item) => getFreshComponent(item))
      : component.content,
  }
}
