import { getVariableText } from '@/lib/tracta/getVariableText'
import React from 'react'

export default function TractaContractInit({
  title,
  author,
  date,
  variables,
}: {
  title: string
  author: string
  date: string
  variables: { [key: string]: string }
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">
        {getVariableText(title, variables)}
      </h1>
      <h2 className="text-xl">{author}</h2>
      <h3>{date}</h3>
    </div>
  )
}
