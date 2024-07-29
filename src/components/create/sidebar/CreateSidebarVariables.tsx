import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'
import { Code } from 'lucide-react'
import { useCreateContext } from '../context/createContext'
import CreateVariablesContent from './CreateVariablesContent'

export default function CreateSidebarVariables() {
  const { varOpen, setVarOpen } = useCreateContext()
  useScrollbar(varOpen)
  return (
    <Dialog open={varOpen} onOpenChange={setVarOpen}>
      <DialogTrigger asChild>
        <Button size="xs" variant="ghost">
          <Code className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0">
        <div className="flex w-full flex-col gap-2 border-b-4 border-black bg-main p-8">
          <DialogHeader>Contract Variables</DialogHeader>
          Add dynamic variables to your contracts so they're easily reuseable.
        </div>
        <div className="relative flex-grow overflow-hidden p-4 md:p-8">
          <CreateVariablesContent />
        </div>
      </DialogContent>
    </Dialog>
  )
}
