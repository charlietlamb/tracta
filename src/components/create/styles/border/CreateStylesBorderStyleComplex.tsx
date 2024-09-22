import { useState } from 'react'
import CreateStylesBorderStyleGrid from './CreateStylesBorderStyleGrid'
import CreateStylesBorderStyleInput from './CreateStylesBorderStyleInput'

export type BorderMode = 'all' | 'left' | 'right' | 'top' | 'bottom'

export default function CreateStylesBorderStyleComplex() {
  const [borderMode, setBorderMode] = useState<BorderMode>('all')
  return (
    <div className="grid w-full grid-cols-3">
      <CreateStylesBorderStyleGrid
        borderMode={borderMode}
        setBorderMode={setBorderMode}
      />
      <CreateStylesBorderStyleInput borderMode={borderMode} />
    </div>
  )
}
