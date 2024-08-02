import { Dispatch, SetStateAction } from 'react'
import { getNextKey } from '../getNextKey'
import { addComponentMap } from '../../maps/addComponentMap'

export function addComponent(
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
  component: Component,
  key: string,
  setAddOpen: Dispatch<SetStateAction<boolean>>,
  setLastChange: Dispatch<SetStateAction<number>>,
  nullSelected: boolean,
) {
  const getJsonFunc = addComponentMap.get(component.key)
  if (!getJsonFunc) return
  setJson(
    getJsonFunc(
      json,
      key,
      getNextKey(json, key, nullSelected),
      component.values,
    ),
  )
  setAddOpen(false)
  setLastChange(Date.now())
}
