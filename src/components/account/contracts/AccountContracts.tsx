import MovingGrid from '@/components/grid/MovingGrid'
import AccountContractGrid from './AccountContractGrid'

export default function AccountContracts() {
  return (
    <div className="relative w-full flex-grow overflow-hidden p-4">
      <MovingGrid />
      <AccountContractGrid />
    </div>
  )
}
