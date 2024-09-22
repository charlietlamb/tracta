import { Accordion } from '@/components/ui/accordion'
import CreateStylesTypography from './typography/CreateStylesTypography'
import { useEditorStore } from '@/state/editor/store'
import CreateStylesNotSelected from './CreateStylesNotSelected'
import DeleteComponent from './DeleteComponent'
import CreateStylesSpacing from './spacing/CreateStylesSpacing'
import CreateStylesSize from './size/CreateStylesSize'
import CreateStylesLayout from './layout/CreateStylesLayout'
import CreateStylesBackground from './background/CreateStylesBackground'
import CreateStylesBorder from './border/CreateStylesBorder'

export default function CreateStyles() {
  const { editorState } = useEditorStore((state) => state)
  const selected = editorState.editor.selected
  return (
    <div className="flex !w-[260px] !min-w-[260px] max-w-[260px] flex-col">
      {selected == null ? (
        <CreateStylesNotSelected />
      ) : (
        <>
          <Accordion
            type="multiple"
            defaultValue={[
              'typography',
              'spacing',
              'size',
              'layout',
              'background',
              'border',
            ]}
            className="flex w-full flex-col divide-y divide-border overflow-y-auto border-b border-border bg-dark"
          >
            <div>
              <CreateStylesLayout />
            </div>
            <div>
              <CreateStylesSize />
            </div>
            <div>
              <CreateStylesSpacing />
            </div>
            <div>
              <CreateStylesTypography />
            </div>
            <div>
              <CreateStylesBackground />
            </div>
            <div>
              <CreateStylesBorder />
            </div>
          </Accordion>
          <DeleteComponent />
        </>
      )}
    </div>
  )
}
