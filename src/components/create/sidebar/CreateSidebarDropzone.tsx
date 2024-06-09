export default function CreateSidebarDropzone({
  contract,
}: {
  contract: TractaDraggable | null
}) {
  return (
    <div
      data-key={contract ? contract.key : '-1'}
      data-indicator
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  )
}
