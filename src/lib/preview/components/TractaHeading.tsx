import { tractaClassNameMap } from '@/lib/tracta/tractaClassNameMap'
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
    <div className={className}>
      {num} {text}
    </div>
  )
}
