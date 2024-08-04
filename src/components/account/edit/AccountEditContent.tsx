import AccountEditForm from './AccountEditForm'

export default function AccountEditContent() {
  return (
    <div className="bg-dark text-light flex h-full w-full min-w-[500px] flex-col items-center justify-center gap-8 p-16 lg:w-[500px]">
      <div className="flex w-full flex-col items-center">
        <h3 className="font-larken text-2xl md:text-3xl">Edit Account</h3>
        <p className="font-light tracking-tight text-accent">
          Edit your tracta account
        </p>
      </div>
      <AccountEditForm />
    </div>
  )
}
