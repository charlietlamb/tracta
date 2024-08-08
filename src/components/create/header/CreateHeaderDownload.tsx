import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/state/editor/store'
import { Tailwind, compile } from '@fileforge/react-print'
import { Download, LoaderCircle } from 'lucide-react'
import TractaComponent from '../sandbox/TractaComponent'
import { gen } from '@/lib/generate/gen'
import { useState } from 'react'

const testHTML = `<!DOCTYPE html>
<html>
    <head>
        <title>My First Document</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
`

export default function CreateHeaderDownload() {
  const { editorState } = useEditorStore((state) => state)
  const [loading, setLoading] = useState(false)
  const component = (
    <Tailwind>
      <div className="w-[794px] bg-white text-black">
        {Array.isArray(editorState.editor.components) &&
          editorState.editor.components.map((c) => (
            <TractaComponent key={c.id} component={c} />
          ))}
      </div>
    </Tailwind>
  )
  async function downloadPdf(editorState: EditorState) {
    setLoading(true)
    const html = await compile(component)
    const pdf = await gen(html)
    if (!pdf) return
    const pdfArray = new Uint8Array(pdf)
    const pdfBlob = new Blob([pdfArray], { type: 'application/pdf' })
    const url = URL.createObjectURL(pdfBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'downloaded.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setLoading(false)
  }
  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        className="px-2 text-white"
        onClick={() => downloadPdf(editorState)}
      >
        {!loading ? (
          <Download className="size-5" />
        ) : (
          <LoaderCircle className="size-5 animate-spin" />
        )}
      </Button>
    </div>
  )
}
