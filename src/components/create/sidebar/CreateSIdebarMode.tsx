import { Button } from "@/components/ui/button";
import { CreateMode } from "../types/CreateMode";

export default function CreateSIdebarMode({mode, icon}: {mode: CreateMode, icon: React.ReactNode}) {
  return (
    <Button variant="sidebar">{icon}</Button>
  )
}
