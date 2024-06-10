'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable'
import { CreateContext } from './context/createContext'
import CreatePreview from './preview/CreatePreview'
import CreateSandbox from './sandbox/CreateSandbox'
import CreateSidebar from './sidebar/CreateSidebar'
import { useEffect, useState } from 'react'
import {
  compileLatex,
  initializeLatexEngines,
} from '@/swift-latex/latexCompilation'

export default function Create({ json: jsonInit }: { json: Contract }) {
  const [json, setJson] = useState<Contract>(jsonInit)
  const [key, setKey] = useState<string>('1')
  const [values, setValues] = useState<string[] | null>(json['1'].values)
  const [tracta, setTracta] = useState<string | null>(json['1'].tracta)
  const [title, setTitle] = useState(values ? values[0] : 'Title')
  const dispatch = useAppDispatch()
  initializeLatexEngines(dispatch)
  // const engine = useAppSelector((state) => state.engine)
  // useEffect(() => {
  //   async function getLatex() {
  //     const latexDocument = `\\documentclass{article}
  //   \\usepackage{graphicx} % Required for inserting images

  //   \\title{contract}
  //   \\author{charlielamb20 }
  //   \\date{June 2024}

  //   \\begin{document}

  //   \\maketitle

  //   \\section{Introduction}

  //   \\end{document}
  //   `
  //     console.log(engine.engineStatus)
  //     const pdf = await compileLatex(latexDocument, dispatch)
  //   }
  //   getLatex()
  // }, [])

  useEffect(() => {
    console.log(json)
  }, [json])
  return (
    <CreateContext.Provider
      value={{
        json,
        setJson,
        key,
        setKey,
        tracta,
        setTracta,
        values,
        setValues,
        title,
        setTitle,
      }}
    >
      <ResizablePanelGroup
        direction="horizontal"
        className="flex flex-grow divide-x divide-black"
        style={{ height: 'calc(100vh - 58px)' }}
      >
        <ResizablePanel minSize={5} defaultSize={15} maxSize={20}>
          <CreateSidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={5}>
          <CreateSandbox />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={5}>
          <CreatePreview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </CreateContext.Provider>
  )
}
