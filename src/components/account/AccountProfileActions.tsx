import { Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import AccountEdit from './edit/AccountEdit'
import { useState } from 'react'
import { AccountEditContext } from './edit/context/accountEditContext'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'

export default function AccountProfileActions() {
  const [open, setOpen] = useState(false)
  useScrollbar(open)
  return (
    <AccountEditContext.Provider value={{ open, setOpen }}>
      <div className="flex justify-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-4">
              <Pencil />
            </Button>
          </DialogTrigger>
          <DialogContent className="overflow-y-auto">
            <AccountEdit />
          </DialogContent>
        </Dialog>
      </div>
    </AccountEditContext.Provider>
  )
}
