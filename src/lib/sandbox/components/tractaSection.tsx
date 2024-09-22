import { defaultHeadingStyles } from '@/lib/styles'
import { v4 as uuidv4 } from 'uuid'
import { componentIconMap } from '../componentIconMap'

const sectionIconFunc = componentIconMap.get('section')
const sectionIcon = sectionIconFunc ? sectionIconFunc('') : null

export const tractaSection: AddComponents = {
  id: '3',
  text: 'Section',
  component: {
    id: uuidv4(),
    name: 'Section',
    tracta: 'section',
    styles: defaultHeadingStyles,
    content: { innerHTML: '<p>1.1</p>' },
  },
  icon: sectionIcon,
}
