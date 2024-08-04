import Auth from './Auth'
import AuthSide from './AuthSide'

export default function AuthWrap() {
  return (
    <div className="divide-border border-border flex w-full items-center justify-center md:border-2 lg:divide-x-4">
      <AuthSide />
      <Auth />
    </div>
  )
}
