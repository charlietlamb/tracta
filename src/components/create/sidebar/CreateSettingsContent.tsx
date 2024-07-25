import { useState, useEffect } from 'react'
import { useCreateContext } from '../context/createContext'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

export default function CreateSettingsContent() {
  const { json, setJson, lastChange, setLastChange } = useCreateContext()
  const { settings } = json
  const [title, setTitle] = useState(json.title)
  const [template, setTemplate] = useState(settings.template)

  useEffect(() => {
    console.log(title)
    setJson({
      ...json,
      title,
      settings: {
        ...json.settings,
        template: template,
      },
    } as Contract)
  }, [lastChange])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-heading">Contract Title</h4>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            setLastChange(Date.now())
          }}
        />
      </div>
      <div className="flex  items-center gap-2">
        <h4 className="text-xl font-heading">Template</h4>
        <Checkbox checked={template} onClick={() => setTemplate(!template)} />
      </div>
    </div>
  )
}
