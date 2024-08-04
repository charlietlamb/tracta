import { headingIconMap } from '@/lib/contract/maps/headingIconMap'
import { useCreateContext } from '../context/createContext'

export default function CreateSidebarHeader() {
  const { json, key, index } = useCreateContext()
  const headingTracta = json[key][index].tracta
  const headingIcon = headingIconMap[headingTracta]
  const headingText =
    json[key][index].tracta === 'table'
      ? json[key][index].value.split('"')[1]
      : json[key][index].value

  console.log(json[key][index].value)
  return (
    <div className="flex h-[41px] items-center gap-2 truncate px-2 font-larken text-white">
      {headingIcon}{' '}
      <div className="flex flex-col leading-none">
        {headingText}{' '}
        <span className="text-border text-xs capitalize leading-none">
          {headingTracta}
        </span>
      </div>
    </div>
  )
}
