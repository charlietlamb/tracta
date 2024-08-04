import { Accordion } from '@/components/ui/accordion'
import CreateSidebarTypography from './typography/CreateSidebarTypography'

export default function CreateSidebarStyles() {
  return (
    <div className="flex flex-col">
      <Accordion
        type="multiple"
        className="divide-border flex w-full flex-col divide-y overflow-y-auto"
      >
        <CreateSidebarTypography />
      </Accordion>
    </div>
  )
}
