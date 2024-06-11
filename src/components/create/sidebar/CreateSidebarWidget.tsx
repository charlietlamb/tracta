import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import CreateSidebarDropzone from './CreateSidebarDropzone'
import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'
import { handleWidgetClick } from '@/lib/contract/functions/handleWidgetClick'
import { handleDragOver } from '@/lib/contract/dnd/handleDragOver'
import { handleDragLeave } from '@/lib/contract/dnd/handleDragLeave'
import { handleDragStart } from '@/lib/contract/dnd/handleDragStart'
import { handleDragEnd } from '@/lib/contract/dnd/handleDragEnd'

export default function CreateSidebarWidget({
  contract,
  children,
}: {
  contract: TractaDraggable
  children?: React.ReactNode
}) {
  const {
    json,
    setJson,
    key,
    setKey,
    setTitle,
    tracta,
    setTracta,
    values,
    setValues,
  } = useCreateContext()
  const { title, author, date, ...contractData } = json
  const [active, setActive] = useState(false)
  const tree = getTree(contractData)

  return (
    <motion.div
      className={cn(
        'flex cursor-pointer flex-col border border-black bg-bg p-2 shadow-base ',
      )}
      draggable
      layout
      layoutId={contract.key}
      onDragStart={(e: any) => handleDragStart(e, contract)}
      onDrop={(e: any) => handleDragEnd(e, tree, json, setJson)}
      onDragOver={(e: any) => handleDragOver(e, setActive)}
      onDragLeave={handleDragLeave}
      onClick={(e) =>
        handleWidgetClick(
          e,
          json,
          contract,
          key,
          setKey,
          setTitle,
          tracta,
          setTracta,
          values,
          setValues,
          setJson,
        )
      }
    >
      <p>
        <span className={cn('font-bold', active && 'animate-pulse')}>
          {contract.key + ' '}
        </span>
        {contract.values[0]}
      </p>
      <CreateSidebarDropzone contract={contract} />
      {children}
    </motion.div>
  )
}
