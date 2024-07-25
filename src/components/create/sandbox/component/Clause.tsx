import { saveJson } from '@/lib/contract/functions/saveJson'
import { useCreateContext } from '../../context/createContext'
import TractaEditor from '../editor/TractaEditor'

export default function Clause() {
  const {
    values,
    setValues,
    setLastChange,
    json,
    setJson,
    key,
    tracta,
    title,
  } = useCreateContext()
  if (!values) return null
  return (
    <>
      <h5 className="text-lg font-heading">Content</h5>
      <TractaEditor
        value={values[1]}
        onChange={(e) => {
          if (!e) return
          setValues([values[1], e])
          saveJson(json, setJson, key, [title, e], tracta)
          setLastChange(Date.now())
          setLastChange(Date.now())
        }}
      />
    </>
  )
}
