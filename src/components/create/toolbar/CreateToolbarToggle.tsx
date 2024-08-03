import { Button } from '@/components/ui/button'
import { useCreateContext } from '../context/createContext'
import { ScrollText, Wallpaper } from 'lucide-react'

export default function CreateToolbarToggle() {
  const { pdf, setPdf } = useCreateContext()
  const className = 'size-5 min-h-5 min-w-5 transition group-hover:text-bg'
  return (
    <Button
      size="xs"
      variant="ghost"
      className="group w-fit p-1 text-white"
      onClick={() => {
        setPdf(!pdf)
      }}
    >
      {pdf ? (
        <Wallpaper className={className} />
      ) : (
        <ScrollText className={className} />
      )}
    </Button>
  )
}
