import React from 'react'
import TractaText from './components/TractaText'
import TractaHeading from './components/TractaHeading'
import TractaSection from './components/TractaSection'
import TractaTable from './components/TractaTable'

export const tractaComponentMap: { [key: string]: React.ComponentType<any> } = {
  section: TractaSection,
  heading: TractaHeading,
  text: TractaText,
  table: TractaTable,
}
