import AuthSide from '@/components/auth/AuthSide'
import AccountEditContent from './AccountEditContent'

export default function AccountEdit() {
  return (
    <div className="divide-border border-border flex w-full items-center justify-center md:border-2 lg:divide-x-4">
      <AuthSide />
      <AccountEditContent />
    </div>
  )
}
