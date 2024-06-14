import './styles/styles.scss'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, ReactNodeViewRenderer, useEditor } from '@tiptap/react'
import { common, createLowlight } from 'lowlight'
import { Transaction } from 'prosemirror-state'

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import CodeBlockComponent from './CodeBlockComponent'

export default function TiptapEditor({
  content,
  setContent,
}: {
  content: string
  setContent: Dispatch<SetStateAction<string>>
}) {
  const lowlight = createLowlight(common)
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockComponent)
        },
      }).configure({ lowlight }),
    ],
    content: `<pre><code class="language-curlyBraces">${content}</code></pre>`,
  })

  useEffect(() => {
    if (editor) {
      editor.on('transaction', ({ transaction, editor }) => {
        const { steps } = transaction
        for (const step of steps) {
          if (step.slice.content.firstChild?.type.name === 'codeBlock') {
            return false
          }
        }
      })
    }
  }, [editor])

  return <EditorContent editor={editor} />
}
