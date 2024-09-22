import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { Link2, Link2Off } from 'lucide-react'

export default function CreateStylesSpacingStandardLink({
  linked,
  setLinked,
}: {
  linked: boolean
  setLinked: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { editorState } = useEditorStore((state) => state)
  return (
    <Button
      variant="align"
      className={cn(
        'col-span-3 flex h-auto items-center gap-2 py-0.5 ',
        linked && 'bg-darker',
      )}
      onClick={() => {
        editorState.editor.styleOptions.linkedBorder = !linked
        setLinked(!linked)
      }}
    >
      {!linked ? 'Link' : 'Unlink'}
      {!linked ? <Link2 className="size-4" /> : <Link2Off className="size-4" />}
    </Button>
  )
}
