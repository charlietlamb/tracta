/*
Language: CurlyBraces
Description: Custom language to highlight curly braces.
*/

function curlyBraces(hljs: any) {
  return {
    name: 'CurlyBraces',
    contains: [
      {
        className: 'curly-brace',
        begin: '{',
        end: '}',
        contains: [
          {
            className: 'content',
            begin: /[^{}]+/,
          },
        ],
      },
    ],
  }
}

export default curlyBraces
