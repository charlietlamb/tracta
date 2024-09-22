'use client'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { v4 } from 'uuid'
import { Plus } from 'lucide-react'
import { useEditorStore } from '@/state/editor/store'
import { defaultStyles } from '@/lib/styles'
import TractaComponent from '../TractaComponent'
import { useSandboxStore } from '@/state/sandbox/store'
import { getStyles } from '@/lib/sandbox/styles/getStyles'
import ComponentLabel from '../general/ComponentLabel'
import ContainerAdd from '../general/ContainerAdd'
import { cn } from '@/lib/utils'
import Hover from '../general/Hover'
export default function Container({
  component,
  pdf = false,
}: {
  component: TractaComponent
  pdf?: boolean
}) {
  const { id, content, styles, tracta } = component
  const { width, hover, setHover } = useSandboxStore((state) => state)
  const { editorState, addComponent, deleteComponent, changeClickedComponent } =
    useEditorStore((state) => state)
  const show = !pdf && !editorState.editor.liveMode
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
            content: { innerHTML: 'Text Element' },
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

  useEffect(() => {
    console.log(hover)
  }, [hover])

  return (
    <div
      className={clsx('group relative  transition-all', {
        'h-fit': tracta === 'container',
        'h-full w-full': tracta === 'body',
        'border !border-blue-500':
          editorState.editor.selected?.id === id &&
          show &&
          editorState.editor.selected?.tracta !== 'body',
        '!border-2 !border-blue-500':
          editorState.editor.selected?.id === id &&
          show &&
          editorState.editor.selected?.tracta === 'body',
        '!border-solid': editorState.editor.selected?.id === id && show,
        'border border-border/20': !editorState.editor.liveMode && !pdf,
        '!border-solid border-blue-500':
          editorState.editor.selected?.tracta !== 'body' && show,
      })}
      onDrop={(e) => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={tracta !== 'body'}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, 'container')}
      onMouseOver={(e) => {
        e.stopPropagation()
        setHover(id)
      }}
      onMouseLeave={(e) => {
        e.stopPropagation()
        setHover(null)
      }}
    >
      <div style={getStyles({ ...styles, padding: '16px' }, pdf ? 794 : width)}>
        <ComponentLabel component={component} pdf={pdf} />
        <Hover component={component} styles={styles} />
        {Array.isArray(content) && content.length > 0 ? (
          content.map((childElement) => (
            <TractaComponent
              component={childElement}
              key={childElement.id}
              pdf={pdf}
            />
          ))
        ) : (
          <ContainerAdd pdf={pdf} />
        )}
      </div>
    </div>
  )
}
