import React, { useState, useReducer } from 'react'

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import { defaultColumns, defaultData } from '../utils/data'



const Home = () => {

  const [data, setData] = useState(() => [...defaultData])
  const [columns] = useState(() => [
    ...defaultColumns,
  ])

  const [columnResizeMode, setColumnResizeMode] = useState('onChange')
  const [columnVisibility, setColumnVisibility] = React.useState({})

  const rerender = useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  })


  return (
    <>

      <div className='mt-5'>This is a project that I want to show different features of 'react table' </div>

      <div className='mt-2'>
        <div className="inline-block border border-black shadow rounded">
          <div className="px-1 border-b border-black">
            <label>
              <input
                {...{
                  type: 'checkbox',
                  checked: table.getIsAllColumnsVisible(),
                  onChange: table.getToggleAllColumnsVisibilityHandler(),
                }}
              />{' '}
              Toggle All
            </label>
          </div>
          {table.getAllLeafColumns().map(column => {
            return (
              <div key={column.id} className="px-1">
                <label>
                  <input
                    {...{
                      type: 'checkbox',
                      checked: column.getIsVisible(),
                      onChange: column.getToggleVisibilityHandler(),
                    }}
                  />{' '}
                  {column.id}
                </label>
              </div>
            )
          })}
        </div></div>
      <div className='mt-2'>

        <div className="overflow-x-auto">

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

export default Home