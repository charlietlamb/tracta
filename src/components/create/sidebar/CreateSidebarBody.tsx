import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'
import CreateSidebarDrag from './CreateSidebarDrag'

export default function CreateSidebarBody() {
  const { json } = useCreateContext()
  const { title, author, date, variables, settings, ...contract } = json
  const contractTree = getTree(contract)

  return <CreateSidebarDrag contractTree={contractTree} />
}
