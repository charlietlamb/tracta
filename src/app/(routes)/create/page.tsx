import Create from '@/components/create/Create'
import { getTemplateJsonServer } from '@/lib/get/template/getTemplateJsonServer'

export default async function page() {
  const json = await getTemplateJsonServer('default')
  return <Create json={json} />
}
