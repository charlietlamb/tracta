'use client'
import { getStyles } from '@/lib/sandbox/styles/getStyles'
import { useEditorStore } from '@/state/editor/store'
import { useSandboxStore } from '@/state/sandbox/store'
import React, { useEffect, useState } from 'react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import TipTapText from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Highlight from '@tiptap/extension-highlight'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import { cn } from '@/lib/utils'
import TextMenu from '../tiptap/TextMenu'
import { motion } from 'framer-motion'
import ComponentLabel from '../general/ComponentLabel'
import Hover from '../general/Hover'
export default function Text({
  component,
  pdf = false,
}: {
  component: TractaComponent
  pdf: boolean
}) {
  const { editorState, changeClickedComponent, updateComponent } =
    useEditorStore((editorState) => editorState)
  const { width, hover, setHover } = useSandboxStore((state) => state)
  const styles = component.styles
  const [selected, setSelected] = useState(false)
  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    changeClickedComponent(editorState, component)
  }
  useEffect(() => {
    if (!editorState.editor.selected) return
    setSelected(editorState.editor.selected.id === component.id)
  }, [editorState.editor.selected])
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      TipTapText,
      Bold,
      Highlight,
      Italic,
      Strike,
      Subscript,
      Superscript,
      Underline,
    ],
    content: !Array.isArray(component.content)
      ? component.content.innerHTML
      : '',
    onUpdate: ({ editor }) => {
      updateComponent(editorState, {
        ...component,
        content: {
          innerHTML: editor.getHTML(),
        },
      })
    },
  })
  return (
    <motion.div
      className={cn(
        'relative border border-border/20 transition',
        selected && 'border-solid border-blue-500',
        (editorState.editor.liveMode || pdf) && 'border-none',
      )}
      onClick={handleOnClickBody}
      animate={{
        padding:
          selected && !editorState.editor.liveMode && !pdf ? '4px' : '0px',
      }}
      style={getStyles({ minWidth: '16px' }, width)}
      onMouseOver={(e) => {
        e.stopPropagation()
        setHover(component.id)
      }}
      onMouseLeave={(e) => {
        e.stopPropagation()
        // setHover(null)
      }}
    >
      <ComponentLabel component={component} pdf={pdf} />
      {pdf ? (
        <div
          style={getStyles(styles, 794)}
          dangerouslySetInnerHTML={{
            __html:
              'innerHTML' in component.content &&
              typeof component.content.innerHTML === 'string'
                ? component.content.innerHTML
                : '',
          }}
        />
      ) : (
        <EditorContent
          className="tiptap-editor border-none"
          editor={editor}
          style={getStyles(styles, width)}
        />
      )}
      {editor && !pdf && <TextMenu editor={editor} />}
      <Hover component={component} styles={styles} />
    </motion.div>
  )
}
