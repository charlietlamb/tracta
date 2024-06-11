import { Dispatch, SetStateAction } from 'react'
import { getNextKey } from './getNextKey'

export function addComponent(
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
  component: Component,
  newKey: string,
  setAddOpen: Dispatch<SetStateAction<boolean>>,
) {
  const key = newKey === '-1' ? getNextKey(json) : newKey
  let newJson = json
  newJson[key] = { tracta: component.key, values: component.values }
  setJson(newJson)
  setAddOpen(false)
}
