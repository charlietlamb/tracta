export default function InfiniteEmpty({ empty }: { empty: boolean }) {
  if (!empty) return null
  return (
    <div className="bg-bgDark shadow-baseWhite font-larken relative z-10 flex w-full items-center justify-center rounded-base border-2 border-white py-4 text-center text-xl font-heading text-white">
      Sorry, we couldn't find anything...
    </div>
  )
}
