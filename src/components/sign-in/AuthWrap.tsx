import Auth from './Auth'
import AuthSide from './AuthSide'

export default function AuthWrap() {
  return (
    <div className="flex w-full items-center justify-center divide-black border-black md:divide-x-8 md:border-4">
      <AuthSide />
      <Auth />
    </div>
  )
}
