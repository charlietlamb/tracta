import { Table, Text, Type } from 'lucide-react'
import React from 'react'

const className = 'size-5'

export const headingIconMap: Record<string, React.ReactNode> = {
  heading: <Type className={className} />,
  text: <Text className={className} />,
  table: <Table className={className} />,
}
