import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'
import { Code } from 'lucide-react'
import CreateVariablesContent from './CreateVariablesContent'
import { useState } from 'react'

export default function CreateToolbarVariables() {
  const [varOpen, setVarOpen] = useState(false) //need to add to store
  useScrollbar(varOpen)
  return (
    <Dialog open={varOpen} onOpenChange={setVarOpen}>
      <DialogTrigger asChild>
        <Button
          size="xs"
          variant="ghost"
          className="group w-full rounded-none p-1 py-4 text-white"
        >
          <Code className="size-5 min-h-5 min-w-5 transition group-hover:text-bg" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0">
        <div className="flex w-full flex-col border-b-2 border-black bg-bg p-4">
          <DialogHeader className="font-larken font-bold">
            Contract Variables
          </DialogHeader>
          Add dynamic variables to your contracts so they're easily reuseable.
        </div>
        <div className="bg-dark relative flex-grow overflow-hidden p-4 text-white">
          <CreateVariablesContent />
        </div>
      </DialogContent>
    </Dialog>
  )
}
