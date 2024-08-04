'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import AuthWrap from '../auth/AuthWrap'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'
import { useAuthDialog } from '@/lib/slice/auth/useAuthDialog'
import { useAppDispatch } from '@/lib/hooks'
import { setOpen } from '@/lib/slice/auth/authSlice'

export default function AccountDialog() {
  const { open } = useAuthDialog()
  const dispatch = useAppDispatch()

  useScrollbar(open)
  return (
    <Dialog open={open} onOpenChange={(o: boolean) => dispatch(setOpen(o))}>
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
