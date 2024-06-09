import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'
import CreateSidebarDrag from './CreateSidebarDrag'
import CreateSidebarDropzone from './CreateSidebarDropzone'

export default function CreateSidebarBody() {
  const { json } = useCreateContext()
  const { title, author, date, ...contract } = json
  const contractTree = getTree(contract)

  return (
    <>
      <CreateSidebarDropzone contract={null} />
      <CreateSidebarDrag contractArray={contractTree} />
    </>
  )
}
