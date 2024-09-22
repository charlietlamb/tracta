import { AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import React from 'react'

export default function StylesSectionLabel({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <AccordionTrigger
      className={cn(
        'rounded-none border-none bg-dark p-2 py-1 font-larken font-light text-light',
        className,
      )}
    >
      {children}
    </AccordionTrigger>
  )
}
