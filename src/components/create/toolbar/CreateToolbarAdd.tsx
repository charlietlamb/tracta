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
import { useCreateContext } from '../context/createContext'

export default function CreateToolbarAdd() {
  const { addOpen, setAddOpen } = useCreateContext()
  useScrollbar(addOpen)
  return (
    <Dialog open={addOpen} onOpenChange={setAddOpen}>
      <DialogTrigger asChild>
        <Button
          size="xs"
          variant="ghost"
          className="group w-fit p-1 text-white"
        >
          <Plus className="size-5 min-h-5 min-w-5 transition group-hover:text-bg" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0">
        <div className="flex w-full flex-col border-b-2 border-black bg-bg p-4">
          <DialogHeader className="font-larken font-bold">
            Add To Your Contract
          </DialogHeader>
          Select a Component to add to your contract.
        </div>
        <div className="bg-bgDark relative flex-grow overflow-hidden p-4">
          <MovingGrid />
          <CreateComponentGrid />
        </div>
      </DialogContent>
    </Dialog>
  )
}
