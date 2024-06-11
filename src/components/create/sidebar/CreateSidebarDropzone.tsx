export default function CreateSidebarDropzone({
  contract,
  under = false,
}: {
  contract: TractaDraggable | null
  under?: boolean
}) {
  return (
    <div
      data-key={
        under && contract ? 'u:' + contract.key : contract ? contract.key : '-1'
      }
      data-indicator
      className="h-0.5 w-full bg-violet-400 opacity-0"
    />
  )
}
