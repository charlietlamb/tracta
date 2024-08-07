'use client'

import MovingGrid from '@/components/grid/MovingGrid'
import { useCreateContext } from '../context/createContext'
import { usePDF } from 'react-to-pdf'
import generatePDF, { Resolution, Options, Margin } from 'react-to-pdf'

import { blobToBase64 } from '@/lib/preview/blobToBase64'
import CreatePreviewContent from './CreatePreviewContent'
import Loader from '@/components/general/loading/Loader'
import CreatePreviewViewer from './CreatePreviewViewer'
import { useEffect } from 'react'
// import { FileforgeClient } from '@fileforge/client'

export default function CreatePreview() {
  // const ff = new FileforgeClient({
  //   apiKey: process.env.FILEFORGE_API_KEY,
  // })
  const {
    setSidebarSelected,
    pdfUrl,
    setPdfUrl,
    lastChange,
    loading,
    setLoading,
  } = useCreateContext()
  const options: Options = {
    filename: 'contract.pdf',
    resolution: Resolution.HIGH,
    method: 'build',
    page: { margin: 4 },
  }
  const { targetRef } = usePDF(options)
  let firstCall = false
  let debounceTimer: any = null

  async function createPDF() {
    if (!targetRef.current) return
    setLoading(true)
    const pdf = await generatePDF(targetRef, options)
    const pdfUrl = pdf.output('bloburl')
    fetch(pdfUrl)
      .then((response) => {
        response.blob().then(async (blob) => {
          const arrayBuffer = (await blobToBase64(blob)) as string
          setPdfUrl(arrayBuffer)
        })
      })
      .catch((error) => console.error('Error fetching Blob:', error))
    setLoading(false)
  }

  useEffect(() => {
    if (firstCall) {
      createPDF()
      firstCall = false
      return
    }
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    debounceTimer = setTimeout(() => {
      createPDF()
    }, 2000)
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer)
      }
    }
    // generatePdf(ff)
  }, [lastChange])

  return (
    <div className="relative flex h-full w-full flex-col">
      <div
        className="bg-dark absolute inset-0 z-10 flex h-full w-full flex-grow flex-col items-center overflow-hidden"
        // onClick={() => setSidebarSelected(null)}
      >
        {pdfUrl && !loading ? (
          <div
            className="no-scrollbar pdf-viewer relative z-10 h-full w-full"
            style={{ height: '100%' }}
          >
            <CreatePreviewViewer pdfUrl={pdfUrl} />
          </div>
        ) : (
          <Loader innerClassName="text-white" />
        )}
      </div>
      <CreatePreviewContent targetRef={targetRef} />
    </div>
  )
}
