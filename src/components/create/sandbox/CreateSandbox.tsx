import { sandboxMap } from '@/lib/contract/maps/sandboxMap'
import { useCreateContext } from '../context/createContext'
import { ArrowUp, ArrowUpDown, Check, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CreateSandboxComponents from './CreateSandboxComponents'
import CreateSandboxHeader from './CreateSandboxHeader'

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
    <div className="bg-bgDark divide-darkBorder flex h-full w-full flex-col divide-y-2 text-white">
      <CreateSandboxHeader parentKey={parentKey} />
      <div className="no-scrollbar flex flex-col gap-4 overflow-y-auto p-4">
        {HeadingComponent}
        <CreateSandboxComponents />
        <div className="flex w-full flex-col items-center gap-4 md:flex-row">
          <Button
            variant="appOutline"
            className="flex w-full items-center gap-2"
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
              variant="appOutline"
              className="flex w-full items-center gap-2"
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
    </div>
  )
}
