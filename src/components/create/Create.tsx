'use client'

import CreateMain from "./CreateMain"
import { CreateContext } from "./context/createContext"
import CreateSidebar from "./sidebar/CreateSidebar"

export default function Create() {
  return (
    <CreateContext.Provider value={{ mode: 'people' }}>
    <div className="flex flex-grow divide-x-4 divide-black"
      style={{ minHeight: 'calc(100vh - 58px)' }}>
        <CreateSidebar />
        <CreateMain />
    </div>
    </CreateContext.Provider>
  )
}
