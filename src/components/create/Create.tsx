'use client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable'
import { CreateContext } from './context/createContext'
import CreatePreview from './preview/CreatePreview'
import CreateSandbox from './sandbox/CreateSandbox'
import CreateSidebar from './sidebar/CreateSidebar'
import { useState } from 'react'

export default function Create({ json: jsonInit }: { json: Contract }) {
  const [json, setJson] = useState<Contract>(jsonInit)
  const [key, setKey] = useState<string>('1')
  const [newKey, setNewKey] = useState<string>('-1')
  const [values, setValues] = useState<string[] | null>(json['1'].values)
  const [tracta, setTracta] = useState<string | null>(json['1'].tracta)
  const [title, setTitle] = useState(values ? values[0] : 'Title')
  const [addOpen, setAddOpen] = useState(false)
  const [varOpen, setVarOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [sidebarSelected, setSidebarSelected] = useState<string | null>(null)
  const [lastChange, setLastChange] = useState<number>(Date.now())
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <CreateContext.Provider
      value={{
        json,
        setJson,
        key,
        setKey,
        newKey,
        setNewKey,
        tracta,
        setTracta,
        values,
        setValues,
        title,
        setTitle,
        addOpen,
        setAddOpen,
        varOpen,
        setVarOpen,
        settingsOpen,
        setSettingsOpen,
        sidebarSelected,
        setSidebarSelected,
        lastChange,
        setLastChange,
        pdfUrl,
        setPdfUrl,
        loading,
        setLoading,
      }}
    >
      <ResizablePanelGroup
        direction="horizontal"
        className="flex flex-grow divide-x divide-black"
        style={{ height: 'calc(100vh - 58px)' }}
      >
        <ResizablePanel
          minSize={5}
          defaultSize={15}
          maxSize={20}
          className="relative z-50"
        >
          <CreateSidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={20} className="relative z-50">
          <CreateSandbox />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={5} className="relative z-50">
          <CreatePreview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </CreateContext.Provider>
  )
}
