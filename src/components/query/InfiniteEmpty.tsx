export default function InfiniteEmpty({ empty }: { empty: boolean }) {
  if (!empty) return null
  return (
    <div className="subheading relative z-10 flex w-full items-center justify-center rounded-base py-4 text-center font-larken font-heading text-accent">
      Sorry, we couldn't find anything...
    </div>
  )
}
