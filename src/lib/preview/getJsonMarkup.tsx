import { Dispatch, SetStateAction, useState } from 'react'
import { sortKeys } from './sortKeys'
import { tractaComponentMap } from './tractaComponentMap'
import TractaContractInit from './components/TractaContractInit'

export function getJsonMarkup(
  json: Contract,
  setMarkup: Dispatch<SetStateAction<React.ReactNode | null>>,
) {
  const { author, title, variables, settings, date, ...values } = json
  const keys = sortKeys(values)
  setMarkup(
    <div className="flex w-full flex-col items-center">
      <TractaContractInit
        title={title}
        author={author}
        date={date}
        variables={json.variables}
      />
      {keys.map((key) => (
        <div className="flex w-full flex-col items-start">
          {Array.isArray(values[key]) &&
            values[key].map((tracta) => {
              const tractaValue = tracta.tracta
              const TractaComponent = tractaComponentMap[tractaValue]
              return (
                <TractaComponent
                  key={key}
                  json={json}
                  num={key}
                  value={tracta.value}
                  variables={json.variables}
                />
              )
            })}
        </div>
      ))}
    </div>,
  )
}
