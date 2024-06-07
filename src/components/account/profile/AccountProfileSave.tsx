'use client'

import { Button } from '@/components/ui/button'
import { Bookmark } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function AccountProfileSave() {
  const [saved, setSaved] = useState(false)
  return (
    <Button
      className="flex w-fit items-center gap-2"
      onClick={() => {
        setSaved(!saved)
        toast('This is a clearer heading.', {
          description: 'Profile saved',
        })
      }}
    >
      Save
      <Bookmark fill={saved ? '#000' : '#00000000'} className="transition" />
    </Button>
  )
}
