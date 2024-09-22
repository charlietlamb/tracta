import { defaultHeadingStyles } from '@/lib/styles'
import { v4 as uuidv4 } from 'uuid'
import { componentIconMap } from '../componentIconMap'

const headingIconFunc = componentIconMap.get('heading')
const headingIcon = headingIconFunc ? headingIconFunc('') : null

export const tractaHeading: AddComponents = {
  id: '2',
  text: 'Heading',
  component: {
    id: uuidv4(),
    name: 'Heading',
    tracta: 'heading',
    styles: defaultHeadingStyles,
    content: [],
  },
  icon: headingIcon,
}
