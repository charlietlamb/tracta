import { Button } from '@/components/ui/button'
import { useCreateContext } from '../../context/createContext'
import { ArrowDown } from 'lucide-react'

export default function Section({
  index,
  tracta,
  num,
}: {
  index: number
  tracta: string
  num: string
}) {
  const { json, setKey, setTitle, setIndex } = useCreateContext()
  const key = json[num][index].value
  return (
    <Button
      onClick={() => {
        setKey(key)
        setTitle(json[json[num][index].value][0].value)
        setIndex(0)
      }}
      className="flex w-full items-center gap-2"
      variant="appOutline"
    >
      <ArrowDown />
      {key} {json[key][0].value}
    </Button>
  )
}
