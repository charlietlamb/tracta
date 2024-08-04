import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export default function AuthLegal() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-center text-sm text-accent">
        By signing up, you confirm that you agree to our terms, license
        agreement and privacy policy.
      </p>
      <div className="divide-border flex items-center justify-center divide-x">
        <Button
          variant="linkBold"
          className="text-light h-auto py-0"
          onClick={() => router.push('/license')}
        >
          License
        </Button>
        <Button
          variant="linkBold"
          className="text-light h-auto py-0"
          onClick={() => router.push('/privacy-policy')}
        >
          Privacy Policy
        </Button>
        <Button
          variant="linkBold"
          className="text-light h-auto py-0"
          onClick={() => router.push('/terms-and-conditions')}
        >
          Terms
        </Button>
      </div>
    </div>
  )
}
