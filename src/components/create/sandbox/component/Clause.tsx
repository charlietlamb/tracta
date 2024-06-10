import { useState } from 'react'
import { useCreateContext } from '../../context/createContext'
import { Textarea } from '@/components/ui/textarea'

export default function Clause() {
  const { values, setValues } = useCreateContext()
  if (!values) return null
  const [description, setDescription] = useState(values[1])
  return (
    <>
      <h5 className="text-lg font-heading">Content</h5>
      <Textarea
        placeholder="Clause content"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
          setValues([values[0], e.target.value])
        }}
      />
    </>
  )
}
