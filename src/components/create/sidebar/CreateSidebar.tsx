import { User } from "lucide-react";
import CreateSIdebarMode from "./CreateSIdebarMode";

export default function CreateSidebar() {

  return (
    <div className="h-full flex flex-col divide-y-2 divide-black">
      <CreateSIdebarMode mode='people' icon={<User />} />
      <CreateSIdebarMode mode='people' icon={<User />} />
    </div>
  )
}
