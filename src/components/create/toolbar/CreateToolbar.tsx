'use client'
import CreateToolbarAdd from './CreateToolbarAdd'
import CreateToolbarSettings from './CreateToolbarSettings'
import CreateToolbarVariables from './CreateToolbarVariables'
import CreateToolbarSave from './CreateToolbarSave'
import CreateToolbarLogo from './CreateToolbarLogo'
import CreateToolbarToggle from './CreateToolbarToggle'

export default function CreateToolbar() {
  return (
    <div className="bg-bgDark divide-darkBorder flex h-full w-10 flex-col divide-y">
      <CreateToolbarLogo />
      <div className="flex flex-col items-center gap-2 py-2">
        <CreateToolbarToggle />
        <CreateToolbarAdd />
        <CreateToolbarVariables />
        <CreateToolbarSave />
        <CreateToolbarSettings />
      </div>
    </div>
  )
}
