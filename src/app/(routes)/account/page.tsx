import Account from "@/components/account/Account";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function page() {
  const supabase = createClient()
  const {data: {user}} = await supabase.auth.getUser()
        if(!user) redirect('/')
  return (
    <Account />
  )
}
