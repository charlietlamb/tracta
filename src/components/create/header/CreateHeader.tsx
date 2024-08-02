'use client'

import NavLogo from '@/components/nav/NavLogo'
import CreateSidebarAdd from './CreateSidebarAdd'
import CreateSidebarSettings from './CreateSidebarSettings'
import CreateSidebarVariables from './CreateSidebarVariables'
import CreateSidebarSave from './CreateSidebarSave'

export default function CreateHeader() {
  return (
    <div className="bg-bgDark flex w-full justify-between gap-2 p-2 py-1">
      <NavLogo />
      <div className="flex items-center gap-2">
        <CreateSidebarAdd />
        <CreateSidebarVariables />
        <CreateSidebarSave />
        <CreateSidebarSettings />
      </div>
    </div>
  )
}
