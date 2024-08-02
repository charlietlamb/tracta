export default function addText(
  json: Contract,
  key: string,
  newKey: string,
  values: string[],
): Contract {
  const newArray = json[key]
  newArray.push({
    tracta: 'text',
    value: values[0],
  })
  return json
}
