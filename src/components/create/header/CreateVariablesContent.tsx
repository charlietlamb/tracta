import { Input } from '@/components/ui/input'
import { useCreateContext } from '../context/createContext'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Plus } from 'lucide-react'

export default function CreateVariablesContent() {
  const { json, setJson, setLastChange } = useCreateContext()
  const { variables } = json
  const [keys, setKeys] = useState(Object.keys(variables))
  const [values, setValues] = useState(Object.values(variables))

  function handleValueChange(i: number, value: string) {
    const newValues = [...values]
    newValues[i] = value
    setValues(newValues)
    setJson({
      ...json,
      variables: Object.fromEntries(keys.map((key, i) => [key, newValues[i]])),
    } as Contract)
    setLastChange(Date.now)
  }

  function handleKeyChange(i: number, key: string) {
    const newKeys = [...keys]
    newKeys[i] = key
    setKeys(newKeys)
    setJson({
      ...json,
      variables: Object.fromEntries(newKeys.map((key, i) => [key, values[i]])),
    } as Contract)
    setLastChange(Date.now)
  }

  function removeVariable(i: number) {
    const newKeys = [...keys]
    newKeys.splice(i, 1)
    setKeys(newKeys)

    const newValues = [...values]
    newValues.splice(i, 1)
    setValues(newValues)

    setJson({
      ...json,
      variables: Object.fromEntries(
        newKeys.map((key, i) => [key, newValues[i]]),
      ),
    } as Contract)
    setLastChange(Date.now)
  }

  function addVariable() {
    setKeys([...keys, ''])
    setValues([...values, ''])
    setLastChange(Date.now)
  }

  return (
    <div className="flex flex-col gap-2">
      {keys.map((key, i) => {
        return (
          <div
            key={`${key}-${i}`}
            className="flex w-full items-center justify-between gap-4 py-2"
          >
            <div className="grid flex-grow grid-cols-1 items-center gap-4 md:grid-cols-2">
              <Input
                value={key}
                onChange={(e) => handleKeyChange(i, e.target.value)}
                className="border-border bg-dark mb-0 w-full max-w-none flex-grow border shadow-none focus-visible:border-white"
              />
              <Input
                value={values[i]}
                onChange={(e) => handleValueChange(i, e.target.value)}
                className="border-border bg-dark mb-0 max-w-none flex-grow border shadow-none focus-visible:border-white"
              />
            </div>
            <Button
              onClick={() => removeVariable(i)}
              className="w-auto"
              variant="appDanger"
            >
              <X />
            </Button>
          </div>
        )
      })}
      <Button
        onClick={addVariable}
        variant="appOutline"
        className="flex items-center gap-2"
      >
        <Plus /> Add Variable
      </Button>
    </div>
  )
}
