import { LoaderCircle } from 'lucide-react'

export default function Loader({ large = false }: { large?: boolean }) {
  return (
    <div className="flex h-full w-full flex-grow items-center justify-center">
      <LoaderCircle className="animate-spin" size={large ? 64 : 32} />
    </div>
  )
}
