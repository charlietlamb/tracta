import { useCreateContext } from '../../context/createContext'
import { Textarea } from '@/components/ui/textarea'
import {
  Table as TableComponent,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button' // Import the Button component
import { Trash, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function Table() {
  const { values, setValues } = useCreateContext()
  if (!values) return null
  const tableData = JSON.parse(values[1].replace(/'/g, '"'))
  const [headers, ...dataArray] = tableData
  const [deleteButtons, setDeleteButtons] = useState(false)

  const handleCellChange = (
    rowIndex: number,
    cellIndex: number,
    newValue: string,
  ) => {
    const newTableData = [...tableData]
    newTableData[rowIndex][cellIndex] = newValue
    setValues([values[0], JSON.stringify(newTableData)])
  }

  const handleAddRow = () => {
    const newTableData = [...tableData]
    newTableData.push(new Array(headers.length).fill('')) // Add a new row with empty strings
    setValues([values[0], JSON.stringify(newTableData)])
  }

  const handleAddColumn = () => {
    const newTableData = tableData.map((row: string[]) => [...row, '']) // Add a new column with empty strings
    setValues([values[0], JSON.stringify(newTableData)])
  }

  const handleDeleteRow = (rowIndex: number) => {
    if (tableData.length <= 2) return // Do not delete if only one row left
    const newTableData = tableData.filter(
      (_: string, index: number) => index !== rowIndex,
    ) // Remove the row at rowIndex
    setValues([values[0], JSON.stringify(newTableData)])
  }

  const handleDeleteColumn = (columnIndex: number) => {
    if (tableData[0].length <= 1) return // Do not delete if only one column left
    const newTableData = tableData.map((row: string[]) =>
      row.filter((_, index) => index !== columnIndex),
    ) // Remove the column at columnIndex
    setValues([values[0], JSON.stringify(newTableData)])
  }

  return (
    <>
      <h5 className="text-lg font-heading">Content</h5>
      <div className="flex flex-col gap-2">
        <TableComponent>
          <TableHeader>
            <TableRow className="divide-x divide-black">
              {headers.map((item: string, index: number) => (
                <TableHead
                  key={index}
                  className={cn(
                    'p-2',
                    index === headers.length - 1 && 'border-r border-black',
                  )}
                >
                  <Textarea
                    value={item}
                    onChange={(e) => handleCellChange(0, index, e.target.value)}
                    className="min-h-[60px] border-none bg-transparent p-0 font-medium text-white shadow-none"
                  />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataArray.map((data: string[], rowIndex: number) => (
              <TableRow
                key={rowIndex}
                className={cn(
                  'divide-x divide-black bg-bg',
                  rowIndex % 2 !== 0 && 'bg-white',
                )}
              >
                {data.map((d: string, cellIndex: number) => (
                  <TableCell key={cellIndex} className="p-2">
                    <Textarea
                      value={d}
                      onChange={(e) =>
                        handleCellChange(
                          rowIndex + 1,
                          cellIndex,
                          e.target.value,
                        )
                      }
                      className="min-h-[60px] border-none bg-transparent p-0 shadow-none"
                    />
                  </TableCell>
                ))}
                <TableCell
                  className={cn(
                    ' cursor-pointer bg-red-200 transition hover:bg-red-400',
                    !deleteButtons && 'hidden',
                  )}
                  onClick={() => handleDeleteRow(rowIndex + 1)}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <Trash2 className="text-white" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            <TableRow
              className={cn(
                'divide-x divide-black',
                !deleteButtons && 'hidden',
              )}
            >
              {headers.map((_: string, columnIndex: number) => (
                <TableCell
                  key={columnIndex}
                  className={cn(
                    'cursor-pointer bg-red-200 transition hover:bg-red-400',
                    columnIndex === headers.length - 1 &&
                      'border-r border-black',
                  )}
                  onClick={() => handleDeleteColumn(columnIndex)}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <Trash2 className="text-white" />
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </TableComponent>
        <div className="flex gap-2">
          <Button
            onClick={handleAddRow}
            className="shadow-none hover:translate-x-0 hover:translate-y-0"
          >
            Add Row
          </Button>
          <Button
            onClick={handleAddColumn}
            className="shadow-none hover:translate-x-0 hover:translate-y-0"
          >
            Add Column
          </Button>
          <Button
            className="bg-red-200 shadow-none hover:translate-x-0 hover:translate-y-0 hover:bg-red-400"
            onClick={() => setDeleteButtons(!deleteButtons)}
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </>
  )
}
