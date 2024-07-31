import { Dispatch, SetStateAction, useState } from 'react'
import { sortKeys } from './sortKeys'
import { tractaComponentMap } from './tractaComponentMap'
import TractaContractInit from './components/TractaContractInit'
import { MarkupContext } from '../tracta/markupContext'

export function getJsonMarkup(
  json: Contract,
  setMarkup: Dispatch<SetStateAction<React.ReactNode | null>>,
  length: number,
  setLength: Dispatch<SetStateAction<number>>,
) {
  const { author, title, variables, settings, date, ...values } = json
  const keys = sortKeys(values)
  setMarkup(
    <MarkupContext.Provider value={{ length, setLength }}>
      <div className="flex w-full flex-col items-center">
        <TractaContractInit
          title={title}
          author={author}
          date={date}
          variables={json.variables}
        />
        {keys.map((key) => {
          const tracta = values[key].tracta
          const tractaValues = values[key].values
          const TractaComponent = tractaComponentMap[tracta]

          return (
            <TractaComponent
              key={key}
              num={key}
              values={tractaValues}
              variables={json.variables}
            />
          )
        })}
      </div>
    </MarkupContext.Provider>,
  )
}
