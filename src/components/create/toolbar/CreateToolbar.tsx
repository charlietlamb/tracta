'use client'
import CreateToolbarAddButton from './CreateToolbarAddButton'
import CreateToolbarSettings from './CreateToolbarSettings'
import CreateToolbarVariables from './CreateToolbarVariables'
import CreateToolbarSave from './CreateToolbarSave'
import CreateToolbarLogo from '../header/CreateHeaderLogo'
import CreateToolbarToggle from './CreateToolbarToggle'
import CreateToolbarContent from './content/CreateToolbarContent'

export default function CreateToolbar() {
  return (
    <div className="divide-border bg-dark relative flex h-full min-w-8 flex-col items-center divide-y">
      <CreateToolbarToggle />
      <CreateToolbarAddButton />
      <CreateToolbarVariables />
      <CreateToolbarSave />
      <CreateToolbarSettings />
      <CreateToolbarContent />
    </div>
  )
}
