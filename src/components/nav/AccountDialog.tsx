'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import AuthWrap from '../auth/AuthWrap'
import { useScrollbar } from '@/hooks/dialog/useScrollbar'

export default function AccountDialog() {
  const [isOpen, setIsOpen] = useState(false)
  useScrollbar(isOpen)
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="whiteOutlineBlack" size="tight">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent>
        <AuthWrap />
      </DialogContent>
    </Dialog>
  )
}
