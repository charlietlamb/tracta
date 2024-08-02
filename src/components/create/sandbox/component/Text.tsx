import { saveJson } from '@/lib/contract/functions/saveJson'
import { useCreateContext } from '../../context/createContext'
import TractaEditor from '../editor/TractaEditor'
import { useEffect, useState } from 'react'

export default function Text({
  index,
  tracta,
  num,
}: {
  index: number
  tracta: string
  num: string
}) {
  const { setLastChange, json, setJson, key } = useCreateContext()
  const [text, setText] = useState(json[key][index].value)

  useEffect(() => {
    setText(json[key][index].value)
  }, [key])
  return (
    <div>
      <h5 className="font-larken text-xl font-bold">Text</h5>
      <TractaEditor
        value={text}
        onChange={(e) => {
          if (!e) return
          setText(e)
          saveJson(json, setJson, num, e, tracta, index)
          setLastChange(Date.now())
          setLastChange(Date.now())
        }}
      />
    </div>
  )
}
