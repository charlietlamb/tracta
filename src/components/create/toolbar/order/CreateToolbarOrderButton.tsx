import { Button } from '@/components/ui/button'
import { ArrowUpDown, Plus } from 'lucide-react'
import { useSandboxStore } from '@/state/sandbox/store'

export default function CreateToolbarAddButton() {
  const { mode, setMode } = useSandboxStore((state) => state)
  return (
    <Button
      size="xs"
      variant="ghost"
      className="group w-full rounded-none py-4 text-white"
      onClick={() => (mode !== 'order' ? setMode('order') : setMode(null))}
    >
      <ArrowUpDown className="size-5 min-h-5 min-w-5 transition group-hover:text-bg" />
    </Button>
  )
}
