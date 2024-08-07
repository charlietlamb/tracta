import CreateHeaderLogo from './CreateHeaderLogo'
import CreateHeaderUndo from './CreateHeaderUndo'

export default function CreateHeader() {
  return (
    <div className="divide-border relative z-50 flex h-8 divide-x">
      <CreateHeaderLogo />
      <CreateHeaderUndo />
    </div>
  )
}
