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
    <div className="flex !w-[280px] !min-w-[280px] max-w-[280px] flex-col py-2">
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
            className="bg-dark divide-border flex w-full flex-col gap-2 divide-y overflow-y-auto"
          >
            <CreateStylesLayout />
            <CreateStylesSize />
            <CreateStylesSpacing />
            <CreateStylesTypography />
            <CreateStylesBackground />
            <CreateStylesBorder />
          </Accordion>
          <DeleteComponent />
        </>
      )}
    </div>
  )
}
