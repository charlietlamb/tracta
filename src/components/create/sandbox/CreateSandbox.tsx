import { sandboxMap } from '@/lib/contract/maps/sandboxMap'
import { useCreateContext } from '../context/createContext'
import { ArrowUp, ArrowUpDown, Check, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CreateSandboxComponents from './CreateSandboxComponents'

export default function CreateSandbox() {
  const {
    json,
    key,
    setKey,
    title,
    setSidebarSelected,
    setAddOpen,
    dnd,
    setDnd,
  } = useCreateContext()

  const parentKey = key.split('.').slice(0, -1).join('.')
  const headingComponentFunction = sandboxMap.get('heading')
  const HeadingComponent = headingComponentFunction
    ? headingComponentFunction(0, key)
    : null
  return (
    <div className="flex h-full w-full flex-col divide-y-2 divide-black">
      <div className="flex h-[39px] w-full items-center justify-between bg-bg px-2">
        <h4 className="font-larken flex-grow text-2xl font-bold">
          {key}. {title}
        </h4>
        {key.split('.').length > 1 && (
          <Button
            className="flex h-auto items-center gap-2 border border-black bg-bg p-1 py-0"
            variant="ghost"
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
      <div className="no-scrollbar flex flex-col gap-4 overflow-y-auto p-4">
        {HeadingComponent}
        <CreateSandboxComponents />
        <Button
          className="flex items-center gap-2"
          onClick={(e) => {
            e.stopPropagation()
            setSidebarSelected(key)
            setAddOpen(true)
          }}
        >
          Add Component <Plus />{' '}
        </Button>
        {json[key].length > 2 && (
          <Button
            className="flex items-center gap-2"
            onClick={(e) => {
              e.stopPropagation()
              setDnd(!dnd)
            }}
          >
            {dnd ? (
              <>
                Finish <Check />
              </>
            ) : (
              <>
                Rearrange <ArrowUpDown />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
