import React from 'react'
import { BorderMode } from './CreateStylesBorderStyleComplex'
import { Button } from '@/components/ui/button'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Maximize,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CreateStylesBorderStyleGrid({
  borderMode,
  setBorderMode,
}: {
  borderMode: BorderMode
  setBorderMode: React.Dispatch<React.SetStateAction<BorderMode>>
}) {
  const borderGridTop = (
    <Button
      variant="ghost"
      className={cn(
        'mb-auto size-6 p-1 text-white hover:bg-border/50 hover:text-white',
        borderMode === 'top' && 'hover:bg-borer/30 bg-border/50',
      )}
      onClick={() => setBorderMode('top')}
    >
      <ArrowUp />
    </Button>
  )
  const borderGridLeft = (
    <Button
      variant="ghost"
      className={cn(
        'mb-auto size-6 p-1 text-white hover:bg-border/50 hover:text-white',
        borderMode === 'left' && 'bg-border/50 hover:bg-border/30',
      )}
      onClick={() => setBorderMode('left')}
    >
      <ArrowLeft />
    </Button>
  )

  const borderGridRight = (
    <Button
      variant="ghost"
      className={cn(
        'mb-auto size-6 p-1 text-white hover:bg-border/50 hover:text-white',
        borderMode === 'right' && 'bg-border/50 hover:bg-border/30',
      )}
      onClick={() => setBorderMode('right')}
    >
      <ArrowRight />
    </Button>
  )

  const borderGridBottom = (
    <Button
      variant="ghost"
      className={cn(
        'mb-auto size-6 p-1 text-white hover:bg-border/50 hover:text-white',
        borderMode === 'bottom' && 'bg-border/50 hover:bg-border/30',
      )}
      onClick={() => setBorderMode('bottom')}
    >
      <ArrowDown />
    </Button>
  )

  const borderGridAll = (
    <Button
      variant="ghost"
      className={cn(
        'mb-auto size-6 p-1 text-white hover:bg-border/50 hover:text-white',
        borderMode === 'all' && 'bg-border/50 hover:bg-border/30',
      )}
      onClick={() => setBorderMode('all')}
    >
      <Maximize />
    </Button>
  )
  const borderGridContent: React.ReactNode[] = [
    <div />,
    <div className="flex items-center justify-center">{borderGridTop}</div>,
    <div />,
    <div className="flex items-center justify-center">{borderGridLeft}</div>,
    <div className="flex items-center justify-center">{borderGridAll}</div>,
    <div className="flex items-center justify-center">{borderGridRight}</div>,
    <div />,
    <div className="flex items-center justify-center">{borderGridBottom}</div>,
  ]
  return (
    <div className="grid w-full grid-cols-3 items-center">
      {borderGridContent.map((item) => item)}
    </div>
  )
}
