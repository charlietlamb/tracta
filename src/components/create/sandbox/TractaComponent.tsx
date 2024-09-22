import React from 'react'
import Container from './components/Container'
import Text from './components/Text'

export default function TractaComponent({
  component,
  pdf = false,
}: {
  component: TractaComponent
  pdf?: boolean
}) {
  switch (component.tracta) {
    case 'text':
      return <Text component={component} pdf={pdf} />
    case 'heading':
      return <Text component={component} pdf={pdf} />
    case 'section':
      return <Text component={component} pdf={pdf} />
    case 'container':
      return <Container component={component} pdf={pdf} />
    case 'body':
      return <Container component={component} pdf={pdf} />

    default:
      return null
  }
}
