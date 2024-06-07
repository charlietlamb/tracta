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

export default function CreateSidebarAdd() {
  const [open, setOpen] = useState(false)
  useScrollbar(open)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="xs">
          <Plus className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0">
        <div className="flex w-full flex-col gap-2 border-b-4 border-black bg-main p-8">
          <DialogHeader>Add To Your Contract</DialogHeader>
          Select a Component to add to your contract.
        </div>
        <div className="relative flex-grow overflow-hidden p-4">
          <MovingGrid />
          <CreateComponentGrid />
        </div>
      </DialogContent>
    </Dialog>
  )
}
