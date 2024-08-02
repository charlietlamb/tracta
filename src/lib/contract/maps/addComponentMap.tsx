import addClause from '../functions/add/addClause'
import addSection from '../functions/add/addSection'
import addTable from '../functions/add/addTable'
import addText from '../functions/add/addText'

export const addComponentMap: Map<
  string,
  (json: Contract, key: string, newKey: string, values: string[]) => Contract
> = new Map([
  [
    'clause',
    (json, key, newKey, values) => addClause(json, key, newKey, values),
  ],
  ['text', (json, key, newKey, values) => addText(json, key, newKey, values)],
  [
    'section',
    (json, key, newKey, values) => addSection(json, key, newKey, values),
  ],
  ['table', (json, key, newKey, values) => addTable(json, key, newKey, values)],
])
