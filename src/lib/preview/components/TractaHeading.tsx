import { tractaClassNameMap } from '@/lib/tracta/tractaClassNameMap'
import { cn } from '@/lib/utils'
import React from 'react'

export default function TractaHeading({
  text,
  num,
}: {
  text: string
  num: string
}) {
  const className = tractaClassNameMap.get(num.split('.').length)
  return (
    <div className={cn('flex flex-row items-center gap-1', className)}>
      {num}
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  )
}
