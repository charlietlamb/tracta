import { Button } from '@/components/ui/button'
import { useCreateContext } from '../context/createContext'
import { ArrowUp } from 'lucide-react'

export default function CreateSandboxHeader({
  parentKey,
}: {
  parentKey: string
}) {
  const { json, key, setKey, title, setSidebarSelected } = useCreateContext()
  return (
    <div className="flex h-[39px] w-full items-center justify-between px-2">
      <h4 className="font-larken flex-grow truncate text-2xl font-bold">
        {key}. {title}
      </h4>
      {key.split('.').length > 1 && (
        <Button
          className="shadow-smallBorder flex h-auto items-center gap-2 p-1 py-0"
          variant="appSmall"
          onClick={(e) => {
            e.stopPropagation()
            setSidebarSelected(parentKey)
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
