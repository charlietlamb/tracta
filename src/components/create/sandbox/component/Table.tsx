import { useCreateContext } from '../../context/createContext'
import {
  Table as TableComponent,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import TractaEditor from '../editor/TractaEditor'

export default function Table({
  index,
  tracta,
  num,
}: {
  index: number
  tracta: string
  num: string
}) {
  const { json, setJson, setLastChange } = useCreateContext()
  const validJSON = json[num][index].value.replace(/'/g, '"')
  const [tableData, setTableData] = useState<string[][]>(JSON.parse(validJSON))
  const [headers, ...dataArray] = tableData
  const [deleteButtons, setDeleteButtons] = useState(false)

  useEffect(() => {
    setJson((prevJson) => {
      const newJson = { ...prevJson }
      newJson[num][index].value = JSON.stringify(tableData).replace(
        /'/g,
        '&apos;',
      )
      return newJson
    })
    setLastChange(Date.now())
  }, [tableData])

  const handleCellChange = (
    rowIndex: number,
    cellIndex: number,
    newValue: string,
  ) => {
    setTableData((prevTableData) => {
      const newTableData = [...prevTableData]
      newTableData[rowIndex][cellIndex] = newValue
      setJson((prevJson) => {
        const newJson = { ...prevJson }
        newJson[num][index].value = JSON.stringify(newTableData).replace(
          /'/g,
          '&apos;',
        )
        return newJson
      })
      setLastChange(Date.now())
      return newTableData
    })
  }

  const handleAddRow = () => {
    setTableData((prevTableData) => {
      const newTableData = [
        ...prevTableData,
        new Array(prevTableData[0].length).fill(''),
      ]
      return newTableData
    })
  }

  const handleAddColumn = () => {
    setTableData((prevTableData) => {
      const newTableData = prevTableData.map((row) => [...row, ''])
      return newTableData
    })
  }

  const handleDeleteRow = (rowIndex: number) => {
    setTableData((prevTableData) => {
      if (prevTableData.length <= 2) return prevTableData // Do not delete if only one row left
      const newTableData = prevTableData.filter(
        (_, index) => index !== rowIndex,
      )
      return newTableData
    })
    setLastChange(Date.now())
  }

  const handleDeleteColumn = (columnIndex: number) => {
    setTableData((prevTableData) => {
      if (prevTableData[0].length <= 1) return prevTableData // Do not delete if only one column left
      const newTableData = prevTableData.map((row) =>
        row.filter((_, index) => index !== columnIndex),
      )
      return newTableData
    })
  }

  return (
    <div className="w-full max-w-full">
      <h5 className="font-larken text-xl font-bold">Table</h5>
      <div className="flex w-full flex-col gap-2 overflow-hidden">
        <TableComponent className="rounded-base">
          <TableHeader>
            <TableRow className="divide-x divide-black border border-black bg-white">
              {headers.map((item: string, index: number) => (
                <TableHead
                  key={index}
                  className={cn(
                    'border border-black p-2 align-top',
                    index === headers.length - 1 && 'border-r border-black',
                  )}
                >
                  <TractaEditor
                    value={item}
                    onChange={(e) => handleCellChange(0, index, e || '')}
                    className="max-h-[40px] min-h-[20px] border-none bg-transparent p-0 font-medium text-white shadow-none"
                    theme="tractaTheme-main"
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
                  'divide-x divide-black bg-white',
                  rowIndex % 2 !== 0 && 'bg-white',
                )}
              >
                {data.map((d: string, cellIndex: number) => (
                  <TableCell key={cellIndex} className="p-2 align-top">
                    <TractaEditor
                      value={d}
                      onChange={(e) =>
                        handleCellChange(rowIndex + 1, cellIndex, e || '')
                      }
                      className="h-full max-h-[40px] min-h-[20px] border-none bg-transparent p-0 shadow-none"
                      theme={
                        rowIndex % 2 !== 0 ? 'tractaTheme' : 'tractaTheme-bg'
                      }
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
            variant="noShadow"
            onClick={handleAddRow}
            className="bg-bg shadow-none hover:bg-main"
          >
            Add Row
          </Button>
          <Button
            variant="noShadow"
            onClick={handleAddColumn}
            className="bg-bg shadow-none hover:bg-main"
          >
            Add Column
          </Button>
          <Button
            variant="noShadow"
            className="bg-red-200 shadow-none hover:bg-red-400"
            onClick={() => setDeleteButtons(!deleteButtons)}
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  )
}
