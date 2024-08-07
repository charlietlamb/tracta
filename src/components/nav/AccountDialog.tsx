'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import AuthWrap from '../auth/AuthWrap'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'
import { useAuthStore } from '@/state/auth/store'

export default function AccountDialog() {
  const { open, setOpen } = useAuthStore((state) => state)
  useScrollbar(open)
  return (
    <Dialog open={open} onOpenChange={(o: boolean) => setOpen(o)}>
      <DialogTrigger asChild>
        <Button variant="navBold" size="tight">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="border-border rounded-none shadow-baseBorder md:rounded-base">
        <AuthWrap />
      </DialogContent>
    </Dialog>
  )
}
