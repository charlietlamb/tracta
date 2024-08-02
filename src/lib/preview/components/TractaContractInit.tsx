import getVariableText from '@/lib/tracta/getVariableText'
import React, { MutableRefObject, useEffect, useRef } from 'react'

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
    <div className="flex w-full flex-col items-center">
      <h1 className="text-center text-3xl font-bold">
        <div
          dangerouslySetInnerHTML={{
            __html: getVariableText(title, variables),
          }}
        />
      </h1>
      <h2 className="text-xl">{author}</h2>
      <h3>{date}</h3>
    </div>
  )
}
