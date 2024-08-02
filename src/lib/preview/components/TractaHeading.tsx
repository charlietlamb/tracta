import getVariableText from '@/lib/tracta/getVariableText'
import { tractaClassNameMap } from '@/lib/tracta/tractaClassNameMap'
import { cn } from '@/lib/utils'

export default function TractaHeading({
  json,
  num,
  value,
  variables,
}: {
  json: Contract
  num: string
  value: string
  variables: { [key: string]: string }
}) {
  const className = tractaClassNameMap.get(num.split('.').length)
  return (
    <div className={cn('flex flex-row items-center gap-1', className)}>
      {num}
      <div
        dangerouslySetInnerHTML={{
          __html: getVariableText(value, variables),
        }}
      />
    </div>
  )
}
