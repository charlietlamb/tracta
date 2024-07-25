export function getVariableText(
  text: string,
  variables: { [key: string]: string },
): string {
  let newText = text
  // Regular expression to match strings wrapped in curly braces
  const regex = /\{([^}]+)\}/g
  let match

  // Iterate over all matches
  while ((match = regex.exec(text)) !== null) {
    const key = match[1] // Extract the key from the match
    if (variables.hasOwnProperty(key)) {
      // If the key exists in variables, replace it in newText
      newText = newText.replace(match[0], variables[key])
    }
  }

  return newText
}
