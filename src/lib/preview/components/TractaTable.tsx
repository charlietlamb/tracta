import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import getVariableText from '@/lib/tracta/getVariableText'

export default function TractaTable({
  json,
  num,
  value,
  variables,
}: {
  json: Contract
  num: string
  value: string
  variables: { [key: string]: string }
}) {
  const table = JSON.parse(value.replace(/'/g, '"'))

  return (
    <Table className="mt-2 inline-block border">
      <TableHeader>
        <TableRow
          className="min-h-8 w-full min-w-full divide-x divide-black bg-white"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${table[0].length}, 1fr)`,
          }}
        >
          {table[0].map((header: string) => (
            <TableHead className="h-auto p-1">
              {getVariableText(header, variables)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.slice(1).map((row: string[]) => (
          <TableRow
            className="min-h-8 divide-x divide-black bg-white"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${table[0].length}, 1fr)`,
            }}
          >
            {row.map((cell: string) => (
              <TableCell className="h-auto p-1">
                {getVariableText(cell, variables)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
