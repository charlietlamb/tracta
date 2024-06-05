import AccountProfileActions from "../AccountProfileActions";
import AccountProfileMore from "./AccountProfileMore";
import AccountProfilePicture from "./AccountProfilePicture";

export default function AccountProfile() {
  return (
    <div className="flex flex-col gap-4 items-center">
        <AccountProfilePicture />
        <AccountProfileActions />
        <AccountProfileMore />
    </div>
  )
}
