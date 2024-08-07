import React from 'react'
import Container from './components/Container'
import Text from './components/Text'

export default function TractaComponent({
  component,
}: {
  component: TractaComponent
}) {
  switch (component.tracta) {
    case 'text':
      return <Text component={component} />
    case 'container':
      return <Container component={component} />
    case 'body':
      return <Container component={component} />

    default:
      return null
  }
}
