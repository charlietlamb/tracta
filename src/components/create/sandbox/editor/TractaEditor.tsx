import React, { useEffect } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'
import { cn } from '@/lib/utils'

export default function TractaEditor({
  value,
  onChange,
  className,
  theme = 'tractaTheme',
}: {
  value: string
  onChange: (value: string | undefined) => void
  className?: string
  theme?: string
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
          [/\{[^}]*$/, 'unclosed-curly-brace'], // Rule for unclosed curly brace
          // Corrected rules for bold, italic, and underlined text
          [/\\b.*?\\b/, 'bold'],
          [/\\i.*?\\i/, 'italic'],
          [/\\u.*?\\u/, 'underline'],
          // Corrected rules for unclosed backslash syntax
          [/\\b[^\\b]*$/, 'unclosed-bold'],
          [/\\i[^\\i]*$/, 'unclosed-italic'],
          [/\\u[^\\u]*$/, 'unclosed-underline'],
        ],
      },
    })

    // Update the theme to include the new token styles
    monaco.editor.defineTheme('tractaTheme', {
      base: 'vs',
      inherit: false,
      rules: [
        { token: 'curly-brace', foreground: '#0000ff' }, // Existing style
        { token: 'unclosed-curly-brace', foreground: '#ff0000' },
        // New styles for bold, italic, and underlined text
        { token: 'bold', foreground: '#0099ff' },
        { token: 'italic', foreground: '#0099ff' },
        { token: 'underline', foreground: '#0099ff' },
        // Styles for unclosed backslash syntax
        { token: 'unclosed-bold', foreground: '#ff0000' },
        { token: 'unclosed-italic', foreground: '#ff0000' },
        { token: 'unclosed-underline', foreground: '#ff0000' },
      ],
      colors: {
        'editor.foreground': '#000000',
        'editor.background': '#ffffff',
      },
    })

    monaco.editor.defineTheme('tractaTheme-bg', {
      base: 'vs',
      inherit: false,
      rules: [
        { token: 'curly-brace', foreground: '#0000ff' }, // Existing style
        { token: 'unclosed-curly-brace', foreground: '#ff0000' },
        // New styles for bold, italic, and underlined text
        { token: 'bold', foreground: '#0099ff' },
        { token: 'italic', foreground: '#0099ff' },
        { token: 'underline', foreground: '#0099ff' },
        // Styles for unclosed backslash syntax
        { token: 'unclosed-bold', foreground: '#ff0000' },
        { token: 'unclosed-italic', foreground: '#ff0000' },
        { token: 'unclosed-underline', foreground: '#ff0000' },
      ],
      colors: {
        'editor.foreground': '#000000',
        'editor.background': '#daf5f0',
      },
    })
    monaco.editor.defineTheme('tractaTheme-main', {
      base: 'vs',
      inherit: false,
      rules: [
        { token: 'curly-brace', foreground: '#0000ff' }, // Existing style
        { token: 'unclosed-curly-brace', foreground: '#ff0000' },
        // New styles for bold, italic, and underlined text
        { token: 'bold', foreground: '#0099ff' },
        { token: 'italic', foreground: '#0099ff' },
        { token: 'underline', foreground: '#0099ff' },
        // Styles for unclosed backslash syntax
        { token: 'unclosed-bold', foreground: '#ff0000' },
        { token: 'unclosed-italic', foreground: '#ff0000' },
        { token: 'unclosed-underline', foreground: '#ff0000' },
      ],
      colors: {
        'editor.foreground': '#000000',
        'editor.background': '#7fbc8c',
      },
    })
    try {
      monaco.editor.setModelLanguage(monaco.editor.getModels()[0], 'tracta')
      monaco.editor.setTheme('tractaTheme')
    } catch (e) {
      // Language already set
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
        contextmenu: false,
        scrollBeyondLastLine: false,
        useShadowDOM: false,
      }}
      className={cn(
        'flex max-h-[120px] min-h-[80px] w-full rounded-base border-2 border-black bg-white p-2 text-sm font-base ring-offset-white transition-all placeholder:text-black/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    />
  )
}
