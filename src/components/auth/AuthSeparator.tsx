import { Separator } from '../ui/separator'

export default function AuthSeparator() {
  return (
    <div className="flex w-full items-center gap-2 font-larken uppercase text-accent">
      <Separator className="w-auto flex-grow bg-accent" />
      Or
      <Separator className="w-auto flex-grow bg-accent" />
    </div>
  )
}
