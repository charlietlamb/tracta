import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import CreatePreview from "./preview/CreatePreview";
import CreateSandbox from "./sandbox/CreateSandbox";

export default function CreateMain() {
  return (
   <ResizablePanelGroup direction="horizontal" className="h-full min-h-full">
  <ResizablePanel><CreateSandbox /></ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel><CreatePreview /></ResizablePanel>
</ResizablePanelGroup>

  )
}
