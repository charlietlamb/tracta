import AccountEditForm from './AccountEditForm'

export default function AccountEditContent() {
  return (
    <div className="flex h-full min-w-[500px] flex-col items-center justify-center gap-8 p-16 lg:w-[600px]">
      <div className="flex w-full flex-col items-center gap-1">
        <h4 className="text-4xl font-heading">Edit Account</h4>
        <p className="text-lg">Edit your tracta account</p>
      </div>
      <AccountEditForm />
    </div>
  )
}
