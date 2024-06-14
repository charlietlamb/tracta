import AuthSide from '@/components/auth/AuthSide'
import AccountEditContent from './AccountEditContent'

export default function AccountEdit() {
  return (
    <div className="flex h-full max-h-none w-full items-center justify-center divide-black border-black md:border-4 lg:divide-x-8">
      <AuthSide />
      <AccountEditContent />
    </div>
  )
}
