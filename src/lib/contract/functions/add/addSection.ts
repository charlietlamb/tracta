import { Dispatch, SetStateAction } from 'react'

export default function addSection(
  json: Contract,
  key: string,
  newKey: string,
  values: string[],
): Contract {
  const newArray = json[key]
  newArray.push({
    tracta: 'section',
    value: newKey,
  })

  json[newKey] = [{ tracta: 'heading', value: 'Section Heading' }]

  return json
}
