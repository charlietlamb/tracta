import MovingGrid from '@/components/grid/MovingGrid'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import CreateComponentGrid from '../component/CreateComponentGrid'
import { useSandboxStore } from '@/state/sandbox/store'

export default function CreateToolbarAddButton() {
  const { mode, setMode } = useSandboxStore((state) => state)
  return (
    <Button
      size="xs"
      variant="ghost"
      className="group w-full rounded-none py-4 text-white"
      onClick={() => (mode !== 'add' ? setMode('add') : setMode(null))}
    >
      <Plus className="size-5 min-h-5 min-w-5 transition group-hover:text-bg" />
    </Button>
  )
}
