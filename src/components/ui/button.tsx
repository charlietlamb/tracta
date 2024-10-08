import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center text-black justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-light text-dark border-2 border-black shadow-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        noShadow: 'bg-light text-dark border-2 border-black',
        hero: 'border-darker border-2 text-white shadow-smallDarker hover:translate-x-boxShadowXSmall hover:translate-x-boxShadowXSmall hover:shadow-none',
        link: 'underline-offset-4 hover:underline',
        linkBold: 'underline-offset-4 hover:underline font-heading',
        neutral: 'bg-white border-2 border-black',
        base: 'bg-white border-2 border-black shadow-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        nav: 'text-xl font-semibold italic text-light hover:underline underline-offset-4',
        navBold:
          'text-xl font-black italic text-light hover:underline underline-offset-4',
        danger:
          'bg-red-200 hover:bg-red-400  border-2 border-black shadow-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        dangerNoShadow: 'bg-red-200 hover:bg-red-400  border-2 border-black',
        ghost:
          'bg-transparent text-black hover:bg-transparent hover:text-border',
        ghostHeader:
          'bg-transparent text-black hover:bg-transparent hover:text-border px-2 text-white hover:text-white/80',
        appOutline:
          'border-border border-2 text-white shadow-smallBorder hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        appSmall: 'border-border border-2 text-white',
        appGhost: 'border border-border text-white hover:bg-border',
        appDanger:
          'text-red-200 hover:text-red-400 border border-border hover:bg-border',
        align: 'p-0 text-white rounded-none bg-border',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        xs: 'h-6 px-2',
        lg: 'h-11 px-8 text-base',
        icon: 'h-10 w-10',
        tight: 'h-10 p-0',
        auto: 'h-auto p-2',
        align: 'h-[22px] p-[2px] w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
