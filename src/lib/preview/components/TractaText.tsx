import getVariableText from '@/lib/tracta/getVariableText'

export default function TractaText({
  json,
  num,
  value,
  variables,
  style,
}: {
  json: Contract
  num: string
  value: string
  variables: { [key: string]: string }
  style: { [key: string]: string }
}) {
  return (
    <div className="flex flex-col" style={style}>
      <div
        dangerouslySetInnerHTML={{
          __html: getVariableText(value, variables),
        }}
      />
    </div>
  )
}
