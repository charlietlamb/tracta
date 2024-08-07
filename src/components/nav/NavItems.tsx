import AccountButton from './AccountButton'
import AccountDialog from './AccountDialog'
import NavLink from './NavLink'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useUserStore } from '@/state/user/store'

export default function NavItems() {
  const { user } = useUserStore((state) => state)

  return (
    <>
      <div className="hidden items-center gap-4 md:flex">
        <NavLink href="/templates">Templates</NavLink>
        <NavLink href="/create">Create</NavLink>
        {!!user ? <AccountButton /> : <AccountDialog />}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="flex md:hidden" />
        </SheetTrigger>
        <SheetContent className="bg-dark flex flex-col items-center gap-4">
          <NavLink href="/templates">Templates</NavLink>
          <NavLink href="/create">Create</NavLink>
          {!!user ? <AccountButton /> : <AccountDialog />}
        </SheetContent>
      </Sheet>
    </>
  )
}
