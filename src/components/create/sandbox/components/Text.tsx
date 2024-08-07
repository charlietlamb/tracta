'use client'
import { Badge } from '@/components/ui/badge'
import { getStyles } from '@/lib/sandbox/styles/getStyles'
import { useEditorStore } from '@/state/editor/store'
import { useSandboxStore } from '@/state/sandbox/store'
import clsx from 'clsx'
import { Trash } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

export default function Text({ component }: { component: TractaComponent }) {
  const { editorState, changeClickedComponent, updateComponent } =
    useEditorStore((editorState) => editorState)
  const { width } = useSandboxStore((state) => state)
  const styles = component.styles
  const bodyRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    changeClickedComponent(editorState, component)
    if (spanRef.current) spanRef.current.focus()
  }
  useEffect(() => {
    console.log(width)
    console.log(styles.fontSize)
    const newStyles = getStyles(styles, width)
    console.log(newStyles.fontSize)
  }, [width, styles])
  //WE ARE NOT ADDING DRAG DROP
  return (
    <div
      style={getStyles(styles, width)}
      ref={bodyRef}
      className={clsx('relative w-full transition-all', {
        '!border-blue-500': editorState.editor.selected?.id === component.id,

        '!border-solid': editorState.editor.selected?.id === component.id,
        'border-[1px] border-dashed border-slate-300':
          !editorState.editor.liveMode,
      })}
      onClick={handleOnClickBody}
    >
      {editorState.editor.selected?.id === component.id &&
        !editorState.editor.liveMode && (
          <Badge variant="editor">{editorState.editor.selected.name}</Badge>
        )}
      <span
        ref={spanRef}
        contentEditable={!editorState.editor.liveMode}
        className="tracta-text focus-active:outline-none placeholder:text-slate-500 focus-visible:outline-none"
        data-placeholder={
          editorState.editor.liveMode ? '' : 'Enter text here...'
        }
        onBlur={(e) => {
          const spanElement = e.target as HTMLSpanElement
          updateComponent(editorState, {
            ...component,
            content: {
              innerText: spanElement.innerText,
            },
          })
        }}
      >
        {!Array.isArray(component.content) && component.content.innerText}
      </span>
    </div>
  )
}
