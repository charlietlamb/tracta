export default function getVariableText(
  text: string,
  variables: { [key: string]: string },
): string {
  let newText = text
  // Regular expression to match strings wrapped in curly braces
  const variableRegex = /\{([^}]+)\}/g
  let match

  // Iterate over all matches for variables and replace them
  while ((match = variableRegex.exec(text)) !== null) {
    const key = match[1] // Extract the key from the match
    if (variables.hasOwnProperty(key)) {
      // If the key exists in variables, replace it in newText
      newText = newText.replace(match[0], variables[key])
    }
  }

  // Replace \b, \u, and \i with HTML tags for bold, underline, and italic
  newText = newText.replace(/\\b(.*?)\\b/g, '<strong>$1</strong>')
  newText = newText.replace(/\\u(.*?)\\u/g, '<u>$1</u>')
  newText = newText.replace(/\\i(.*?)\\i/g, '<em>$1</em>')
  newText = newText.replace(/&apos;/g, "'")
  return newText
}
