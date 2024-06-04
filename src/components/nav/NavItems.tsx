import AccountButton from './AccountButton'
import AccountDialog from './AccountDialog'
import NavLink from './NavLink'

export default function NavItems() {
  const loggedIn = false
  return (
    <div className="flex items-center gap-4">
      <NavLink href="/">Features</NavLink>
      <NavLink href="/">Features</NavLink>
      <NavLink href="/">Features</NavLink>
      <NavLink href="/">Features</NavLink>
      {loggedIn ? <AccountButton /> : <AccountDialog />}
    </div>
  )
}
