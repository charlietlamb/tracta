import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { useEffect } from 'react'

export default function GeneralSelect({
  value,
  setValue,
  metric,
  setMetric,
  stylesKey,
  defaultValue = 'auto',
  className,
  onChange = null,
}: {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  metric: Metric
  setMetric: React.Dispatch<React.SetStateAction<Metric>>
  stylesKey: string
  defaultValue?: string
  className?: string
  onChange?: null | ((e: string) => void)
}) {
  const { editorState, getComponent, updateComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  useEffect(() => {
    if (!selected) return
  }, [selected])
  if (!selected) return null
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Input
        variant="editor"
        value={value}
        placeholder={defaultValue}
        className="pr-[30px]"
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value)
            return
          }
          setValue(e.target.value)
          const newVar =
            e.target.value == 'auto' || e.target.value.length === 0
              ? defaultValue
              : e.target.value + metric
          updateStyles(
            editorState,
            selected.id,
            { [stylesKey]: newVar },
            getComponent,
            updateComponent,
          )
        }}
      />
      <Select
        defaultValue={metric}
        onValueChange={(e) => {
          setMetric(e as Metric)
          const newVar = value + e
          updateStyles(
            editorState,
            selected.id,
            { [stylesKey]: newVar },
            getComponent,
            updateComponent,
          )
        }}
      >
        <SelectTrigger className="absolute bottom-0 right-0 top-0 z-10 h-auto w-[30px] items-center justify-start border-none p-0 font-larken text-light">
          <p className={cn(' leading-none', metric === '%' && 'pt-[2px]')}>
            {metric}
          </p>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="%">%</SelectItem>
            <SelectItem value="px">px</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
