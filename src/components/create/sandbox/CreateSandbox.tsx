import { sandboxMap } from '@/lib/contract/maps/sandboxMap'
import { useCreateContext } from '../context/createContext'
import { Input } from '@/components/ui/input'
import { saveJson } from '@/lib/contract/functions/saveJson'
import TiptapEditor from './TiptapEditor'

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
        <TiptapEditor content={title} setContent={setTitle} />
        <Input
          placeholder="Clause name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            setValues([e.target.value, ...otherValues])
            saveJson(
              json,
              setJson,
              key,
              [e.target.value, ...otherValues],
              tracta,
            )
          }}
        />
        {sandboxMap.get(tracta)}
      </div>
    </div>
  )
}
