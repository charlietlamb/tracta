import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

export default function Loader({
  large = false,
  className,
  innerClassName,
}: {
  large?: boolean
  className?: string
  innerClassName?: string
}) {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-grow items-center justify-center',
        className,
      )}
    >
      <LoaderCircle
        className={cn('animate-spin', innerClassName)}
        size={large ? 64 : 32}
      />
    </div>
  )
}
