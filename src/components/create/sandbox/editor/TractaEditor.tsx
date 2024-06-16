import React, { useEffect } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'

// This config defines how the language is displayed in the editor.
// This config defines how the language is displayed in the editor.
export const languageDef = {
  defaultToken: '',
  brackets: [['{', '}', 'delimiter.curly']],
  tokenizer: {
    root: [
      [/{/, 'delimiter.curly'],
      [/}/, 'delimiter.curly'],
      [/[^{}]+/, '@variable'],
    ],
  },
}

const configuration = {
  base: 'vs',
  inherit: true,
  rules: [
    { token: '@variable', foreground: '0000FF', fontStyle: 'bold' },
    { token: 'delimiter.curly', foreground: 'FF0000', fontStyle: 'bold' },
  ],
}

export default function TractaEditor({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string | undefined) => void
}) {
  const monaco = useMonaco()

  useEffect(() => {
    if (!monaco) return
    // Register a new language
    monaco.languages.register({ id: 'tracta' })
    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('tracta', languageDef)
    // Set the editing configuration for the language
    monaco.editor.defineTheme('tracta', configuration)
  }, [monaco])
  return (
    <Editor
      defaultLanguage="tracta"
      theme="tracta"
      value={value}
      onChange={onChange}
      line={20}
      options={{
        lineNumbers: 'off',
        minimap: { enabled: false },
        readOnly: false,
        scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
        wordWrap: 'on',
        wrappingIndent: 'same',
        fontFamily: 'Geist',
        fontSize: 14,
        lineHeight: 20,
        lineDecorationsWidth: 0,
        glyphMargin: false,
        renderLineHighlight: 'none',
        overviewRulerBorder: false,
      }}
      className="flex max-h-[120px] min-h-[80px] w-full rounded-base border-2 border-black bg-white px-3 py-2 text-sm font-base shadow-base ring-offset-white placeholder:text-black/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    />
  )
}
