import MovingGrid from '@/components/grid/MovingGrid'

export default function AuthSide() {
  return (
    <div className="relative hidden h-full flex-grow overflow-hidden bg-main md:flex">
      <MovingGrid className="bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />
    </div>
  )
}
