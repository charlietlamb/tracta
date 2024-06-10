import { saveContract } from '@/lib/save/contract/saveContract'
import { unsaveContact } from '@/lib/save/contract/unsaveContact'
import { Dispatch, SetStateAction } from 'react'

export async function handleContractSavedClick(
  user: User,
  contract: ContractData,
  saved: boolean,
  setSaved: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) {
  setLoading(true)
  if (saved) {
    unsaveContact(user, contract)
    setSaved(false)
  } else {
    await saveContract(user, contract)
    setSaved(true)
  }
  setLoading(false)
}
