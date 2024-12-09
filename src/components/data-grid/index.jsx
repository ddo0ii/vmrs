import React, { useState } from 'react';
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import { DefaultNoRowsOverlay } from '@/components/data-grid/default-no-rows-overlay';

export const DataGrid = ({
  rows,
  columns,
  emptyHeight = 300,
  slotsProps,
  toolbar,
  toolbarProps,
  paddingX = 3.5,
  pageSize = 10,
  isPagination = true,
  noRowMessage,
  ...dataGridProps
}) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize,
    page: 0,
  });
  const theme = useTheme();

  return (
    <MuiDataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={[5, 10, 25, 50, 100]}
      slots={{
        // toolbar: toolbar || DefaultToolbar,
        // pagination: rows?.length > 0 && isPagination && DefaultPagination,
        noRowsOverlay: DefaultNoRowsOverlay,
        ...slotsProps,
      }}
      slotProps={{
        toolbar: {
          rows,
          paginationModel,
          setPaginationModel,
          ...toolbarProps,
        },
        noRowsOverlay: {
          message: noRowMessage,
        },
      }}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      {...dataGridProps}
    />
  );
};
