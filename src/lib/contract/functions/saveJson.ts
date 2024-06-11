import { Dispatch, SetStateAction } from 'react'

export function saveJson(
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
  key: string,
  values: string[] | null,
  tracta: string | null,
) {
  console.log(key)
  console.log(values)
  json[key] = { tracta: tracta || '', values: values || [] }
  setJson(json)
}
