import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'
import { Cog } from 'lucide-react'
import CreateSettingsContent from './settings/CreateSettingsContent'
import { useState } from 'react'

export default function CreateToolbarSettings() {
  const [settingsOpen, setSettingsOpen] = useState(false) //need to add to store
  useScrollbar(settingsOpen)
  return (
    <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
      <DialogTrigger asChild>
        <Button
          size="xs"
          variant="ghost"
          className="group w-full rounded-none p-1 py-4 text-white"
        >
          <Cog className="size-5 min-h-5 min-w-5 transition group-hover:animate-spin group-hover:text-bg" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0">
        <div className="flex w-full flex-col border-b-2 border-black bg-bg p-4">
          <DialogHeader className="font-larken font-bold">
            Contract Settings
          </DialogHeader>
          Manage the settings for your contract.
        </div>
        <div className="bg-dark relative flex-grow overflow-hidden p-4 text-white">
          <CreateSettingsContent />
        </div>
      </DialogContent>
    </Dialog>
  )
}
