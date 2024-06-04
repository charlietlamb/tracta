import NavItems from './NavItems'
import NavLogo from './NavLogo'

export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-between border-b-2 border-black bg-main px-4 py-2">
      <NavLogo />
      <NavItems />
    </nav>
  )
}
