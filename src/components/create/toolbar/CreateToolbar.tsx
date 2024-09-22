'use client'
import CreateToolbarAddButton from './add/CreateToolbarAddButton'
import CreateToolbarSettings from './CreateToolbarSettings'
import CreateToolbarVariables from './CreateToolbarVariables'
import CreateToolbarSave from './CreateToolbarSave'
import CreateToolbarContent from './content/CreateToolbarContent'
import CreateToolbarOrderButton from './order/CreateToolbarOrderButton'

export default function CreateToolbar() {
  return (
    <div className="relative flex h-full min-w-8 flex-col items-center divide-y divide-border bg-dark">
      <CreateToolbarAddButton />
      <CreateToolbarOrderButton />
      <CreateToolbarVariables />
      <CreateToolbarSave />
      <CreateToolbarSettings />
      <CreateToolbarContent />
    </div>
  )
}
