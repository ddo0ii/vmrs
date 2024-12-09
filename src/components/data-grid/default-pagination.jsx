import {
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import { Pagination as MuiPagination } from '@mui/material'
import React from 'react'

const Pagination = ({ page, onPageChange, className, ...rest }) => {
  const apiRef = useGridApiContext()
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1)
      }}
    />
  )
}

export const DefaultPagination = (props) => (
  <GridPagination ActionsComponent={Pagination} {...props} />
)
