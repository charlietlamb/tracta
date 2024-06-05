import AccountContracts from "./contracts/AccountContracts";
import AccountProfile from "./profile/AccountProfile";

export default function Account() {
  return (
    <div style={{ minHeight: 'calc(100vh - 58px)' }} className="w-full flex h-full">
        <AccountProfile />
        <AccountContracts />
    </div>
  )
}
