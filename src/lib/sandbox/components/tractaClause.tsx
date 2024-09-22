import { defaultStylesContainer } from '@/lib/styles'
import { v4 as uuidv4 } from 'uuid'
import { componentIconMap } from '../componentIconMap'
import { tractaSection } from './tractaSection'
import { tractaText } from './tractaText'

const sectionIconFunc = componentIconMap.get('clause')
const sectionIcon = sectionIconFunc ? sectionIconFunc('') : null

export const tractaClause: AddComponents = {
  id: '4',
  text: 'Clause',
  component: {
    id: uuidv4(),
    name: 'Container',
    tracta: 'container',
    styles: defaultStylesContainer,
    content: [
      { ...tractaSection.component, id: uuidv4() },
      { ...tractaText.component, id: uuidv4() },
    ],
  },
  icon: sectionIcon,
}
