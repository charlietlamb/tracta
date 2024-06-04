'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import AuthWrap from '../sign-in/AuthWrap'

export default function AccountDialog() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-no-margin')
    } else {
      document.body.classList.remove('body-no-margin')
    }
  }, [isOpen])
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="whiteOutlineBlack" size="tight">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="no-scrollbar dialog-content-md absolute inset-0 h-auto max-h-screen w-auto max-w-none translate-x-0 translate-y-0 p-0 md:inset-8">
        <AuthWrap />
      </DialogContent>
    </Dialog>
  )
}
