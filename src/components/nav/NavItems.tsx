import AccountButton from './AccountButton'
import AccountDialog from './AccountDialog'
import NavLink from './NavLink'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useAppSelector } from '@/lib/hooks'

export default async function NavItems() {
  const user = useAppSelector((state) => state.user)

  return (
    <>
      <div className="hidden items-center gap-4 md:flex">
        <NavLink href="/templates">Templates</NavLink>
        <NavLink href="/create">Create</NavLink>
        {!!user ? <AccountButton /> : <AccountDialog />}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="flex text-white md:hidden" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center gap-4 bg-main">
          <NavLink href="/templates">Templates</NavLink>
          <NavLink href="/create">Create</NavLink>
          {!!user ? <AccountButton /> : <AccountDialog />}
        </SheetContent>
      </Sheet>
    </>
  )
}
