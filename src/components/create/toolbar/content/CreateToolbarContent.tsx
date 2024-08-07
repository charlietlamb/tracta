import toolbarComponentMap from '@/lib/sandbox/toolbarComponentMap'
import { useSandboxStore } from '@/state/sandbox/store'

export default function CreateToolbarContent() {
  const { mode } = useSandboxStore((state) => state)
  if (!mode) return null
  return toolbarComponentMap.get(mode)
}
