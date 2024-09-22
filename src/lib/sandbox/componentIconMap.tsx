import {
  Box,
  ListOrdered,
  NotebookPen,
  Package,
  Table,
  Text,
  Type,
} from 'lucide-react'

const withClassName = (Component: React.ElementType) => (className: string) => {
  return <Component className={className} />
}

export const componentIconMap = new Map<
  string,
  (className: string) => React.ReactNode
>([
  ['body', withClassName(Package)],
  ['container', withClassName(Box)],
  ['heading', withClassName(Type)],
  ['text', withClassName(Text)],
  ['table', withClassName(Table)],
  ['section', withClassName(ListOrdered)],
  ['clause', withClassName(NotebookPen)],
])
