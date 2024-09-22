import { cn } from '@/lib/utils'
import React from 'react'

export default function StyleLabel({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h6
      className={cn(
        'flex items-center justify-start text-sm text-white/90',
        className,
      )}
    >
      {children}
    </h6>
  )
}
