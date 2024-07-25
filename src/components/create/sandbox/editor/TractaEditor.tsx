import React, { useEffect } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'

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
    monaco.languages.setMonarchTokensProvider('tracta', {
      tokenizer: {
        root: [
          [/\{[a-zA-Z 0-9:]+\}/, 'curly-brace'], // Existing rule for curly braces with content
          [/\{[^}]*$/, 'unclosed-curly-brace'], // New rule for unclosed curly brace
        ],
      },
    })

    // Update the theme to include the new token style
    monaco.editor.defineTheme('tractaTheme', {
      base: 'vs',
      inherit: false,
      rules: [
        { token: 'curly-brace', foreground: '#0000ff' }, // Existing style
        {
          token: 'unclosed-curly-brace',
          foreground: '#ff0000',
        },
      ],
      colors: {
        'editor.foreground': '#000000',
      },
    })
    try {
      monaco.editor.setModelLanguage(monaco.editor.getModels()[0], 'tracta')
      monaco.editor.setTheme('tractaTheme')
    } catch (e) {
      //language already set
    }
  }, [monaco])

  return (
    <Editor
      defaultLanguage="tracta"
      theme="tractaTheme"
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
        folding: false,
        rulers: [],
        quickSuggestions: false,
        overviewRulerLanes: 0,
      }}
      className="flex max-h-[120px] min-h-[80px] w-full rounded-base border-2 border-black bg-white p-2 text-sm font-base ring-offset-white transition-all placeholder:text-black/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    />
  )
}
