import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useCreateContext } from '../context/createContext'
import { getTree } from '@/lib/contract/functions/getTree'
import { handleWidgetClick } from '@/lib/contract/functions/handleWidgetClick'
import { handleDragOver } from '@/lib/contract/dnd/handleDragOver'
import { handleDragLeave } from '@/lib/contract/dnd/handleDragLeave'
import { handleDragStart } from '@/lib/contract/dnd/handleDragStart'
import { handleDragEnd } from '@/lib/contract/dnd/handleDragEnd'
import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionContent } from '@radix-ui/react-accordion'

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
    sidebarSelected,
    setSidebarSelected,
    setLastChange,
  } = useCreateContext()
  const { title, author, date, variables, settings, ...contractData } = json
  const [active, setActive] = useState(false)
  const tree = getTree(contractData)
  const width = contract.key.includes('.')
    ? contract.key.split('.').length - 1
    : 0
  return (
    <motion.div
      className={cn(
        'border-t border-black shadow-none',
        !width && 'border-t-2',
      )}
      data-key={contract.key}
      data-indicator
      draggable
      onDragStart={(e: any) => handleDragStart(e, contract)}
      onDragOver={(e: any) => handleDragOver(e, setActive)}
      onDrop={(e: any) =>
        handleDragEnd(e, tree, json, setJson, key, setKey, setLastChange)
      }
      onDragLeave={(e: any) => handleDragLeave(e, setActive)}
      onClick={(e) => {
        setSidebarSelected(contract.key)
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
      }}
    >
      {!!contract.children?.length ? (
        <AccordionItem
          value={contract.key}
          className={cn(
            'max-w-full border-none shadow-none',
            active && 'animate-pulse',
          )}
        >
          <div
            className={cn(
              'flex w-full items-center bg-bg p-1 transition-colors',
              sidebarSelected === contract.key && 'bg-main',
            )}
            style={{ paddingLeft: `${width * 4}px` }}
          >
            <AccordionTrigger
              className={cn(
                'ml-auto bg-bg p-1 transition-colors [&[data-state=open]]:border-b-0',
                sidebarSelected === contract.key && 'bg-main',
              )}
            />
            <p className="cursor-pointer">
              <span className={cn('font-bold', active && 'animate-pulse')}>
                {contract.key + ' '}
              </span>
              {contract.values[0]}
            </p>
          </div>
          <AccordionContent className="bg-bg">{children}</AccordionContent>
        </AccordionItem>
      ) : (
        <p
          className={cn(
            'max-w-full cursor-pointer bg-bg p-1 transition-colors ',
            sidebarSelected === contract.key && 'bg-main',
          )}
          style={{ paddingLeft: `${width * 8 + 28}px` }}
        >
          <span className={cn('font-bold', active && 'animate-pulse')}>
            {contract.key + ' '}
          </span>
          {contract.values[0]}
        </p>
      )}
    </motion.div>
  )
}
