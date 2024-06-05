import { createClient } from '@/utils/supabase/server'
import AccountButton from './AccountButton'
import AccountDialog from './AccountDialog'
import NavLink from './NavLink'

export default async function NavItems() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return (
    <div className="flex items-center gap-4">
      <NavLink href="/">Features</NavLink>
      <NavLink href="/">Features</NavLink>
      <NavLink href="/">Features</NavLink>
      <NavLink href="/">Features</NavLink>
      {!!user ? <AccountButton /> : <AccountDialog />}
    </div>
  )
}
