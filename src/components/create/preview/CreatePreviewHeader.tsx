import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import CreatePreviewHeaderPreview from './CreatePreviewHeaderPreview'
import CreatePreviewHeaderDownload from './CreatePreviewHeaderDownload'

export default function CreatePreviewHeader({
  targetRef,
  toPDF,
}: {
  targetRef: React.RefObject<HTMLDivElement>
  toPDF: () => void
}) {
  return (
    <div className="relative z-20 grid h-12 w-full grid-cols-3 gap-4 border-b-2 border-black bg-bg p-2">
      <CreatePreviewHeaderDownload toPDF={toPDF} />
      <CreatePreviewHeaderPreview targetRef={targetRef} />
    </div>
  )
}
