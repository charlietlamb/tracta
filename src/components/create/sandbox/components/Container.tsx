'use client'
import clsx from 'clsx'
import React from 'react'
import { v4 } from 'uuid'
import { Plus, Trash } from 'lucide-react'
import { useEditorStore } from '@/state/editor/store'
import { defaultStyles } from '@/lib/constants'
import { Badge } from '@/components/ui/badge'
import TractaComponent from '../TractaComponent'
import { Button } from '@/components/ui/button'
import { useSandboxStore } from '@/state/sandbox/store'
import { cn } from '@/lib/utils'
import { getStyles } from '@/lib/sandbox/styles/getStyles'

const Container = ({ component }: { component: TractaComponent }) => {
  const { id, content, name, styles, tracta } = component
  const { width, setMode } = useSandboxStore((state) => state)
  const { editorState, addComponent, deleteComponent, changeClickedComponent } =
    useEditorStore((state) => state)

  const handleOnDrop = (e: React.DragEvent, type: string) => {
    e.stopPropagation()
    const componentType = e.dataTransfer.getData(
      'componentType',
    ) as TractaComponentType
    switch (componentType) {
      case 'text':
        addComponent(
          editorState,
          {
            content: { innerText: 'Text Element' },
            id: v4(),
            name: 'Text',
            styles: {
              color: 'black',
              ...defaultStyles,
            },
            tracta: 'text',
          },
          id,
        )
        break
      case 'container':
        addComponent(
          editorState,
          {
            content: [],
            id: v4(),
            name: 'Container',
            styles: { ...defaultStyles },
            tracta: 'container',
          },
          id,
        )
        break
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === 'body') return
    e.dataTransfer.setData('componentType', type)
  }

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    changeClickedComponent(editorState, component)
  }

  const handleDeleteElement = () => {
    deleteComponent(editorState, component)
  }

  return (
    <div
      style={getStyles({ ...styles, padding: '16px' }, width)}
      className={clsx('group relative transition-all', {
        // 'w-full max-w-full': tracta === 'container' || tracta === '2Col',
        'h-fit': tracta === 'container',
        'h-full w-full': tracta === 'body',
        // 'overflow-y-scroll ': tracta === 'body',
        // 'flex flex-col md:!flex-row': tracta === '2Col',
        '!border-blue-500':
          editorState.editor.selected?.id === id &&
          !editorState.editor.liveMode &&
          editorState.editor.selected?.tracta !== 'body',
        '!border-2 !border-blue-500':
          editorState.editor.selected?.id === id &&
          !editorState.editor.liveMode &&
          editorState.editor.selected?.tracta === 'body',
        '!border-solid':
          editorState.editor.selected?.id === id &&
          !editorState.editor.liveMode,
        'border-border border-[1px] border-dashed':
          !editorState.editor.liveMode,
        '!border-solid border-blue-500':
          editorState.editor.selected?.tracta !== 'body' &&
          !editorState.editor.liveMode,
      })}
      onDrop={(e) => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={tracta !== 'body'}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, 'container')}
    >
      <Badge
        variant="editor"
        className={cn(
          'hidden',
          editorState.editor.selected?.id === component.id &&
            !editorState.editor.liveMode &&
            'block',
        )}
      >
        {component.name}
      </Badge>

      {Array.isArray(content) && content.length > 0 ? (
        content.map((childElement) => (
          <TractaComponent key={childElement.id} component={childElement} />
        ))
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          onClick={() => setMode('add')}
        >
          <Plus style={getStyles({ width: '64px', height: '64px' }, width)} />
        </div>
      )}

      {editorState.editor.selected?.id === component.id &&
        !editorState.editor.liveMode &&
        editorState.editor.selected?.tracta !== 'body' && (
          <div className="bg-primary absolute -right-[1px] -top-[25px] rounded-none rounded-t-lg  px-2.5 py-1 text-xs font-bold ">
            <Trash size={16} onClick={handleDeleteElement} />
          </div>
        )}
    </div>
  )
}

export default Container
