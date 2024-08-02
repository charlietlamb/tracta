import getVariableText from '@/lib/tracta/getVariableText'

export default function TractaText({
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
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: getVariableText(value, variables),
      }}
    />
  )
}
