import { useEffect } from 'react'
import { initializeLatexEngines } from '@/swift-latex/latexCompilation'

export default function CreateSandbox() {
  useEffect(() => {
    initializeLatexEngines()
  }, [])
  return <div className="flex h-full w-full flex-col"></div>
}
