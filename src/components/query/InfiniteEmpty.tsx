export default function InfiniteEmpty({ empty }: { empty: boolean }) {
  if (!empty) return null
  return (
    <div className="relative z-10 flex w-full items-center justify-center border-2 border-black bg-white py-4 text-center text-xl font-heading shadow-base">
      We couldn't find anything... <br /> Try adjusting your search
    </div>
  )
}
