import AccountProfileActions from '../AccountProfileActions'
import AccountProfilePicture from './AccountProfilePicture'

export default function AccountProfile() {
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden p-4">
      <AccountProfilePicture />
      <div className="flex w-full flex-col">
        <AccountProfileActions />
      </div>
    </div>
  )
}
