import { getVariableText } from '@/lib/tracta/getVariableText'
import TractaClauseText from './TractaClauseText'
import TractaHeading from './TractaHeading'

export default function TractaClause({
  num,
  values,
  variables,
}: {
  num: string
  values: string[]
  variables: { [key: string]: string }
}) {
  return (
    <div className="flex w-full flex-col items-start">
      <TractaHeading text={getVariableText(values[0], variables)} num={num} />
      <TractaClauseText text={getVariableText(values[1], variables)} />
    </div>
  )
}
