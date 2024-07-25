import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Eye } from 'lucide-react'
import React from 'react'
import CreatePreviewContent from './CreatePreviewContent'
import MovingGrid from '@/components/grid/MovingGrid'
import { Button } from '@/components/ui/button'

export default function CreatePreviewHeaderPreview({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="xs">
          <Eye className="size-4"></Eye>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex w-auto flex-col items-center overflow-hidden">
        <MovingGrid />
        <CreatePreviewContent
          className="relative z-10 m-4 w-[794px] border-black bg-white font-contract shadow-none"
          targetRef={targetRef}
          preview
        />
      </DialogContent>
    </Dialog>
  )
}
