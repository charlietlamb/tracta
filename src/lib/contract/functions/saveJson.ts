import { Dispatch, SetStateAction } from 'react'

export function saveJson(
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
  key: string,
  value: string,
  tracta: string,
  index: number,
) {
  json[key][index] = { tracta, value }
  setJson(json)
}
