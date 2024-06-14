import { handleDragEnd } from '@/lib/contract/dnd/handleDragEnd'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'

export default function CreateSidebarDropzoneGrow() {
  const { json, setJson, setSidebarSelected, key, setKey } = useCreateContext()
  const { title, author, date, variables, settings, ...contractData } = json
  const [active, setActive] = useState(false)
  const tree = getTree(contractData)

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setActive(true)
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        setActive(false)
      }}
      onDrop={(e: any) =>
        handleDragEnd(e, tree, json, setJson, key, setKey, true)
      }
      className={cn(
        'min-h-16 flex-grow bg-violet-400',
        active && 'animate-pulse',
      )}
      onClick={() => setSidebarSelected(null)}
    />
  )
}
