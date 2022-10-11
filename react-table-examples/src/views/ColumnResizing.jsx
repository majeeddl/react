import React, { useState, useReducer } from 'react'


import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'

import { defaultColumns, defaultData } from '../utils/data'

import '../assets/css/ColumnResizing.scss'



const ColumnResizing = () => {

  const [data, setData] = useState(() => [...defaultData])
  const [columns] = useState(() => [
    ...defaultColumns,
  ])

  const [columnResizeMode, setColumnResizeMode] = useState('onChange')

  const rerender = useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  })

  return (
    <>
      <div>ColumnResizing</div>
      <div className="p-2">

        <div className="text-xl">{'<table/>'}</div>
        <div className="overflow-x-auto" style={{ maxWidth: '100%', overflow: 'auto' }}>
          <table
            className='table table-bordered'
            {...{
              style: {
                width: table.getCenterTotalSize(),
              },
            }}
          >
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      {...{
                        key: header.id,
                        colSpan: header.colSpan,
                        style: {
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      <div
                        {...{
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''
                            }`,
                          style: {
                            transform:
                              columnResizeMode === 'onEnd' &&
                                header.column.getIsResizing()
                                ? `translateX(${table.getState().columnSizingInfo.deltaOffset
                                }px)`
                                : '',
                          },
                        }}
                      />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td
                      {...{
                        key: cell.id,
                        style: {
                          width: cell.column.getSize(),
                        },
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ColumnResizing