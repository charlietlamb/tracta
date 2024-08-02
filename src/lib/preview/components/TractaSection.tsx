import { tractaComponentMap } from '../tractaComponentMap'

export default function TractaSection({
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
    <>
      {json[value].map((tracta) => {
        const tractaValue = tracta.tracta
        const TractaComponent = tractaComponentMap[tractaValue]

        return (
          <TractaComponent
            key={value}
            json={json}
            num={value}
            value={tracta.value}
            variables={json.variables}
          />
        )
      })}
    </>
  )
}
