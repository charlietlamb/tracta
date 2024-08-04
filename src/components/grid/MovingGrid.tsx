'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function MovingGrid({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        'absolute -bottom-16 -top-16 left-0 right-0 bg-[linear-gradient(to_right,#57626080_1px,transparent_1px),linear-gradient(to_bottom,#57626080_1px,transparent_1px)] bg-[size:64px_64px]',
        className,
      )}
      animate={{
        y: [0, 64],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1,
        ease: 'linear',
      }}
    />
  )
}
