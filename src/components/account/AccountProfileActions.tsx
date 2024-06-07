import AccountProfileSave from './profile/AccountProfileSave'

export default function AccountProfileActions() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <AccountProfileSave />
      <AccountProfileSave />
      <AccountProfileSave />
    </div>
  )
}
