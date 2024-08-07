import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'editor'
}

const inputVariants = cva(
  'relative z-10 mb-0 flex h-10 w-full rounded-base border-2 border-black bg-white px-3 py-2 text-sm font-base shadow-base ring-offset-white selection:bg-main selection:text-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        editor:
          'border-border bg-darker font-veryLight selection:bg-border mb-0 h-auto border px-1 py-[2px] pr-6 shadow-none',
        marginBottom: 'mb-4',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
