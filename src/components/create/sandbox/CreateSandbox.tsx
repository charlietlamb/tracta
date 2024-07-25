import { sandboxMap } from '@/lib/contract/maps/sandboxMap'
import { useCreateContext } from '../context/createContext'
import { Input } from '@/components/ui/input'
import { saveJson } from '@/lib/contract/functions/saveJson'
import Editor from '@monaco-editor/react'
import TractaEditor from './editor/TractaEditor'
import { useEffect } from 'react'

export default function CreateSandbox() {
  const {
    json,
    setJson,
    tracta,
    key,
    title,
    setTitle,
    values,
    setValues,
    setSidebarSelected,
    setLastChange,
  } = useCreateContext()
  const otherValues = values?.slice(1) || []

  if (!tracta) return null
  return (
    <div
      className="flex h-full w-full flex-col divide-y-2 divide-black "
      onClick={() => setSidebarSelected(null)}
    >
      <h4 className="w-full bg-bg p-4 py-2 text-2xl font-heading">
        {key}. {title}
      </h4>
      <div className="no-scrollbar flex flex-col overflow-y-auto p-4">
        <h5 className="text-lg font-heading">Title</h5>
        <TractaEditor
          value={title}
          onChange={(e) => {
            if (!e) return
            setTitle(e)
            setValues([e, ...otherValues])
            saveJson(json, setJson, key, [e, ...otherValues], tracta)
            setLastChange(Date.now())
          }}
        />

        {sandboxMap.get(tracta)}
      </div>
    </div>
  )
}
