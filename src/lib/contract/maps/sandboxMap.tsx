import Heading from '@/components/create/sandbox/component/Heading'
import Section from '@/components/create/sandbox/component/Section'
import Table from '@/components/create/sandbox/component/Table'
import Text from '@/components/create/sandbox/component/Text'

export const sandboxMap = new Map([
  [
    'section',
    (index: number, num: string) => (
      <Section index={index} tracta="section" num={num} />
    ),
  ],
  [
    'heading',
    (index: number, num: string) => (
      <Heading index={index} tracta="heading" num={num} />
    ),
  ],
  [
    'text',
    (index: number, num: string) => (
      <Text index={index} tracta="text" num={num} />
    ),
  ],
  [
    'table',
    (index: number, num: string) => (
      <Table index={index} tracta="table" num={num} />
    ),
  ],
])
