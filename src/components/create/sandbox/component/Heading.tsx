import { saveJson } from '@/lib/contract/functions/saveJson'
import { useCreateContext } from '../../context/createContext'
import TractaEditor from '../editor/TractaEditor'
import { useEffect, useState } from 'react'

export default function Heading({
  index,
  tracta,
  num,
}: {
  index: number
  tracta: string
  num: string
}) {
  const { setLastChange, json, setJson, setTitle, key } = useCreateContext()
  const [heading, setHeading] = useState(json[key][index].value)

  useEffect(() => {
    setHeading(json[key][index].value)
  }, [key])

  return (
    <div>
      <h5 className="font-larken text-xl font-bold">Heading</h5>
      <TractaEditor
        value={heading}
        onChange={(e) => {
          if (!e) return
          setHeading(e)
          setTitle(e)
          saveJson(json, setJson, num, e, tracta, index)
          setLastChange(Date.now())
          setLastChange(Date.now())
        }}
      />
    </div>
  )
}
