import MovingGrid from '@/components/grid/MovingGrid'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Save } from 'lucide-react'

export default function CreateToolbarSave() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="xs"
          variant="ghost"
          className="group w-fit p-1 text-white"
        >
          <Save className="size-5 min-h-5 min-w-5 transition group-hover:text-bg" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0">
        <div className="flex w-full flex-col border-b-2 border-black bg-bg p-4">
          <DialogHeader className="font-larken font-bold">
            Save Your Contract
          </DialogHeader>
          Save your contract and come back another time.
        </div>
        <div className="bg-bgDark relative flex-grow overflow-hidden p-4"></div>
      </DialogContent>
    </Dialog>
  )
}
