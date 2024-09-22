import CreateHeaderDownload from './CreateHeaderDownload'
import CreateHeaderLive from './CreateHeaderLive'
import CreateHeaderLogo from './CreateHeaderLogo'
import CreateHeaderUndo from './CreateHeaderUndo'

export default function CreateHeader() {
  return (
    <div className="relative z-50 flex h-8 divide-x divide-border">
      <CreateHeaderLogo />
      <CreateHeaderUndo />
      <CreateHeaderDownload />
      <CreateHeaderLive />
    </div>
  )
}
