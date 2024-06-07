import AccountContracts from './contracts/AccountContracts'
import AccountProfile from './profile/AccountProfile'

export default function Account() {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 58px)' }}
      className="flex h-full w-full flex-col divide-y-4 divide-black"
    >
      <AccountProfile />
      <AccountContracts />
    </div>
  )
}
