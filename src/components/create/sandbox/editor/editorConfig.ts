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
