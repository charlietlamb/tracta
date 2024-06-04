import { Separator } from '../ui/separator'

export default function AuthSeparator() {
  return (
    <div className="flex w-full items-center gap-2">
      <Separator className='flex-grow' />
      Or
      <Separator className='flex-grow' />
    </div>
  )
}
