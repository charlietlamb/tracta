import { cn } from '@/lib/utils'
import { useState } from 'react'
import CreateSidebarDropzone from './CreateSidebarDropzone'
import { useCreateContext } from '../context/createContext'
import { getTargetRank } from '@/lib/contract/functions/getTargetRank'
import { buildNestedArrays } from '@/lib/contract/functions/buildNestedArrays'
import { changeNestedArray } from '@/lib/contract/functions/changeNestedArray'
import { getNewJson } from '@/lib/contract/functions/getNewJson'
import { getTree } from '@/lib/contract/functions/getTree'

export default function CreateSidebarWidget({
  contract,
  children,
}: {
  contract: TractaDraggable
  children?: React.ReactNode
}) {
  const { json, setJson } = useCreateContext()
  const { title, author, date, ...contractData } = json
  const [active, setActive] = useState(false)
  const keys = Object.keys(contractData)
  const nestedArray = buildNestedArrays(keys)
  const tree = getTree(contractData)
  const handleDragStart = (e: DragEvent, tracta: TractaDraggable) => {
    e.stopPropagation()
    if (!e.dataTransfer) return
    e.dataTransfer.setData('tractaKey', tracta.key)
    console.log(tracta.key)
  }

  const handleDragEnd = (e: DragEvent) => {
    if (!e.dataTransfer) return
    const dragKey = e.dataTransfer.getData('tractaKey')
    clearHighlights()

    const indicators = getIndicators()
    const { element } = getNearestIndicator(e, indicators)

    const dropKey = element.dataset.key || '-1'
    const changedNestedArray = changeNestedArray(nestedArray, dragKey, dropKey)
    console.log(changedNestedArray)
    setJson(getNewJson(json, changedNestedArray))
  }

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators()

    indicators.forEach((i) => {
      i.style.opacity = '0'
    })
  }
  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators()

    clearHighlights(indicators)

    const el = getNearestIndicator(e, indicators)

    el.element.style.opacity = '1'
  }

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()

        const offset = e.clientY - (box.top + DISTANCE_OFFSET)

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      },
    )

    return el
  }

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-indicator="true"]`,
      ) as unknown as HTMLElement[],
    )
  }
  const handleDragLeave = () => {
    clearHighlights()
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    highlightIndicator(e)

    setActive(true)
  }
  return (
    <div
      className={cn('flex flex-col border border-black bg-bg p-2')}
      draggable
      onDragStart={(e: any) => handleDragStart(e, contract)}
      onDrop={(e: any) => handleDragEnd(e)}
      onDragOver={(e: any) => handleDragOver(e)}
      onDragLeave={handleDragLeave}
    >
      <p>
        <span className={cn('font-bold', active && 'animate-pulse')}>
          {contract.key + ' '}
        </span>
        {contract.values[0]}
      </p>
      <CreateSidebarDropzone contract={contract} />
      {children}
    </div>
  )
}
