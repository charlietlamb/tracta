import { Button } from '@/components/ui/button'
import { useCreateContext } from '../context/createContext'
import { ArrowUp } from 'lucide-react'

export default function CreateSandboxHeader() {
  const { json, key, setKey, title, setTitle, setSidebarSelected } =
    useCreateContext()
  const parentKey = key.split('.').slice(0, -1).join('.')
  return (
    <div className="flex h-[39px] w-full items-center justify-between px-4 text-white">
      <h4 className="font-larken flex-grow truncate text-2xl font-bold">
        {key}. {title}
      </h4>
      {key.split('.').length > 1 && (
        <Button
          className="flex h-auto items-center gap-2 border p-1 py-0"
          variant="appSmall"
          onClick={(e) => {
            e.stopPropagation()
            setSidebarSelected(parentKey)
            setTitle(json[parentKey][0].value)
            setKey(parentKey)
          }}
        >
          <ArrowUp />
          {parentKey + '. ' + json[parentKey][0].value}
        </Button>
      )}
    </div>
  )
}
