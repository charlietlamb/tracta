import MovingGrid from '../grid/MovingGrid'
import TemplatesGrid from './TemplatesGrid'

export default function Templates() {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 58px)' }}
      className="flex h-full w-full flex-col items-center divide-y-4 divide-black"
    >
      <div className="flex flex-col items-center gap-1 p-4">
        <h1 className="text-4xl font-heading">Templates</h1>
        <p className="text-lg">
          The most popular templates on the platform. Use these to get started.
        </p>
      </div>
      <div className="relative w-full flex-grow overflow-hidden p-4">
        <MovingGrid />
        <TemplatesGrid />
      </div>
    </div>
  )
}
