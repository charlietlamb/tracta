import User from '@/components/user/User'

export default function page({ params }: { params: { userId: string } }) {
  return <User userId={params.userId} />
}
