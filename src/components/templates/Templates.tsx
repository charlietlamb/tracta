import MovingGrid from '../grid/MovingGrid'
import TemplatesGrid from './TemplatesGrid'

export default function Templates() {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 58px)' }}
      className="bg-dark relative flex h-full w-full flex-col items-center overflow-hidden py-4"
    >
      <div className="relative z-10 flex flex-col items-center gap-1 p-4">
        <h1 className="text-light subheading font-larken">Templates</h1>
        <p className="text-h2 tracking-tight text-accent">
          The most popular templates on the platform. Use these to get started.
        </p>
      </div>
      <div className="relative z-10 w-full flex-grow overflow-hidden p-4">
        <TemplatesGrid />
      </div>
      <MovingGrid />
    </div>
  )
}
