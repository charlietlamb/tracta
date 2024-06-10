export function getNewJson(json: Contract, nestedArray: any[]) {
  const { title, author, date } = json
  let newContractData: { [key: string]: any } = {}
  let init = false
  function iterateNestedArray(nestedArray: any[], indices: number[] = []) {
    for (let i = 0; i < nestedArray.length; i++) {
      const newIndices = indices.concat(i + 1)
      const indexString = newIndices.join('.')
      console.log('---')
      console.log(indexString)
      console.log(i)
      console.log(nestedArray[i])
      console.log(json[nestedArray[i]])
      if (init) newContractData[indexString] = json[nestedArray[i]]
      init = true
      console.log(nestedArray)
      console.log(newContractData[indexString])
      if (Array.isArray(nestedArray[i]))
        iterateNestedArray(nestedArray[i], newIndices)
    }
  }

  iterateNestedArray(nestedArray)
  console.log(newContractData)
  return { title, author, date, ...newContractData } as Contract
}
