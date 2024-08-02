import { Accordion } from '@/components/ui/accordion'
import CreateSidebarTypography from './CreateSidebarTypography'

export default function CreateSidebarStyles() {
  return (
    <Accordion
      type="multiple"
      className="divide-darkBorder flex w-full flex-col divide-y overflow-y-auto"
    >
      <CreateSidebarTypography />
    </Accordion>
  )
}
