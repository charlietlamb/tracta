import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export default function AuthLegal() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-center text-sm text-zinc-400">
        By signing up, you confirm that you agree to our terms, license
        agreement and privacy policy.
      </p>
      <div className="flex items-center justify-center divide-x divide-black">
        <Button
          variant="linkBold"
          className="h-auto py-0"
          onClick={() => router.push('/license')}
        >
          License
        </Button>
        <Button
          variant="linkBold"
          className="h-auto py-0"
          onClick={() => router.push('/privacy-policy')}
        >
          Privacy Policy
        </Button>
        <Button
          variant="linkBold"
          className="h-auto py-0"
          onClick={() => router.push('/terms-and-conditions')}
        >
          Terms
        </Button>
      </div>
    </div>
  )
}
