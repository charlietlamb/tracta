export default function addTable(
  json: Contract,
  key: string,
  newKey: string,
  values: string[],
): Contract {
  const newArray = json[key]
  newArray.push({
    tracta: 'table',
    value: values[0],
  })
  return json
}
