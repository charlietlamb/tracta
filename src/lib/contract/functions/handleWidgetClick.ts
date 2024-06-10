import { Dispatch, SetStateAction } from 'react'
import { saveJson } from './saveJson'

export function handleWidgetClick(
  e: React.MouseEvent<HTMLDivElement>,
  json: Contract,
  contract: TractaDraggable,
  key: string,
  setKey: Dispatch<SetStateAction<string>>,
  setTitle: Dispatch<SetStateAction<string>>,
  tracta: string | null,
  setTracta: Dispatch<SetStateAction<string | null>>,
  values: string[] | null,
  setValues: Dispatch<SetStateAction<string[] | null>>,
  setJson: Dispatch<SetStateAction<Contract>>,
) {
  e.stopPropagation()
  saveJson(json, setJson, key, values, tracta)
  console.log(contract.values)
  setKey(contract.key)
  setValues(contract.values)
  setTracta(contract.tracta)
  setTitle(contract.values[0])
}
