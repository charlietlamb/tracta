import { Accordion } from '@/components/ui/accordion'
import CreateStylesTypography from './typography/CreateStylesTypography'
import { useEditorStore } from '@/state/editor/store'
import CreateStylesNotSelected from './CreateStylesNotSelected'
import DeleteComponent from './DeleteComponent'
import CreateStylesSpacing from './spacing/CreateStylesSpacing'
import CreateStylesSize from './size/CreateStylesSize'

export default function CreateStyles() {
  const { editorState } = useEditorStore((state) => state)
  const selected = editorState.editor.selected
  return (
    <div className="flex !w-[250px] !min-w-[250px] max-w-[250px] flex-col py-2">
      {selected == null ? (
        <CreateStylesNotSelected />
      ) : (
        <>
          <Accordion
            type="multiple"
            defaultValue={['typography', 'spacing', 'size']}
            className="bg-dark divide-border flex w-full flex-col gap-2 divide-y overflow-y-auto"
          >
            <CreateStylesSize />
            <CreateStylesSpacing />
            <CreateStylesTypography />
          </Accordion>
          <DeleteComponent />
        </>
      )}
    </div>
  )
}
