import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'
import { Cog } from 'lucide-react'
import { useCreateContext } from '../context/createContext'
import CreateSettingsContent from './setttings/CreateSettingsContent'

export default function CreateSidebarSettings() {
  const { settingsOpen, setSettingsOpen } = useCreateContext()
  useScrollbar(settingsOpen)
  return (
    <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
      <DialogTrigger asChild>
        <Button size="xs" variant="ghost" className="group mx-auto w-fit p-1">
          <Cog className="size-4 min-h-4 min-w-4 group-hover:animate-spin" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0">
        <div className="flex w-full flex-col gap-2 border-b-4 border-black bg-bg p-8">
          <DialogHeader>Contract Settings</DialogHeader>
          Manage the settings for your contract.
        </div>
        <div className="relative flex-grow overflow-hidden p-4 md:p-8">
          <CreateSettingsContent />
        </div>
      </DialogContent>
    </Dialog>
  )
}
