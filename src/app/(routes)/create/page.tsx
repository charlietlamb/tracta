import Create from '@/components/create/Create'
import { getTemplateJsonServer } from '@/lib/get/template/getTemplateJsonServer'

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const id: string =
    searchParams.id && typeof searchParams.id === 'string'
      ? searchParams.id
      : '2b6527ba-6229-42fa-8811-5cb95b701966'
  const json = await getTemplateJsonServer(id)
  return <Create json={json} />
}
