import { Button } from '@/components/ui/button'
import { ScrollText, Wallpaper } from 'lucide-react'

export default function CreateToolbarToggle() {
  const className = 'size-5 min-h-5 min-w-5 transition group-hover:text-bg'
  return (
    <Button
      size="xs"
      variant="ghost"
      className="group w-full rounded-none py-4 text-white"
      // onClick={() => {
      //   setPdf(!pdf)
      // }}
    >
      {true ? (
        <Wallpaper className={className} />
      ) : (
        <ScrollText className={className} />
      )}
    </Button>
  )
}
