import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import React from 'react'

export default function CreatePreviewHeaderDownload({
  toPDF,
}: {
  toPDF: () => void
}) {
  return (
    <Button onClick={() => toPDF()} size="xs">
      <Download className="size-4" />
    </Button>
  )
}
