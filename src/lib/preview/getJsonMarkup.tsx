import { Dispatch, SetStateAction } from 'react'
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
    <div className="flex w-full flex-col items-center p-4">
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
    </div>,
  )
}
