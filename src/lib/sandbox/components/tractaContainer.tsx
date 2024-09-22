import { defaultStylesContainer } from '@/lib/styles'
import { v4 as uuidv4 } from 'uuid'
import { componentIconMap } from '../componentIconMap'

const containerIconFunc = componentIconMap.get('container')
const containerIcon = containerIconFunc ? containerIconFunc('') : null

export const tractaContainer: AddComponents = {
  id: '5',
  text: 'Container',
  component: {
    id: uuidv4(),
    name: 'Container',
    tracta: 'container',
    styles: defaultStylesContainer,
    content: [],
  },
  icon: containerIcon,
}
