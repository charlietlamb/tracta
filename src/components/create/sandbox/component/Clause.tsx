import { useCreateContext } from '../../context/createContext'
import { Textarea } from '@/components/ui/textarea'

export default function Clause() {
  const { values, setValues } = useCreateContext()
  if (!values) return null
  return (
    <>
      <h5 className="text-lg font-heading">Content</h5>
      <Textarea
        placeholder="Clause content"
        value={values[1]}
        onChange={(e) => {
          setValues([values[0], e.target.value])
        }}
      />
    </>
  )
}
