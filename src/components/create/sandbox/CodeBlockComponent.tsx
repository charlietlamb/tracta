import './styles/CodeBlockComponent.scss'

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import React, { ChangeEvent } from 'react'
import { Node as TiptapNode } from '@tiptap/core'

interface CodeBlockComponentProps {
  node: TiptapNode
  updateAttributes: (attrs: any) => void
  extension: any
}

const CodeBlockComponent: React.FC<CodeBlockComponentProps> = ({
  node,
  updateAttributes,
  extension,
}) => {
  const defaultLanguage = node.attrs.language

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updateAttributes({ language: event.target.value })
  }

  return (
    <NodeViewWrapper className="code-block">
      <select
        contentEditable={false}
        defaultValue={defaultLanguage}
        onChange={handleLanguageChange}
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight.listLanguages().map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <pre>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  )
}

export default CodeBlockComponent
