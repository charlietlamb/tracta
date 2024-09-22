import { defaultTextStyles } from '@/lib/styles'
import { v4 as uuidv4 } from 'uuid'
import { componentIconMap } from '../componentIconMap'

const textIconFunc = componentIconMap.get('text')
const textIcon = textIconFunc ? textIconFunc('') : null

export const tractaText: AddComponents = {
  id: '1',
  text: 'Text',
  component: {
    id: uuidv4(),
    name: 'Text',
    tracta: 'text',
    styles: defaultTextStyles,
    content: [],
  },
  icon: textIcon,
}
