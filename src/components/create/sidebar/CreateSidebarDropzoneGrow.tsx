import { handleDragEnd } from '@/lib/contract/dnd/handleDragEnd'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'

export default function CreateSidebarDropzoneGrow() {
  const { json, setJson } = useCreateContext()
  const { title, author, date, ...contractData } = json
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
      onDrop={(e: any) => handleDragEnd(e, tree, json, setJson, true)}
      className={cn(
        'min-h-0.5 flex-grow bg-violet-400',
        active && 'animate-pulse',
      )}
    />
  )
}
