import getVariableText from '@/lib/tracta/getVariableText'
import { useMarkupContext } from '@/lib/tracta/markupContext'
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
  const { length, setLength } = useMarkupContext()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    setLength(ref.current.offsetHeight)
    console.log(ref.current.offsetHeight)
  }, [ref])
  return (
    <div className="flex w-full flex-col items-center" ref={ref}>
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
