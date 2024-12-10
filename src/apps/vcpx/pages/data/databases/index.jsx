import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@/components/data-grid';
import { columns, rows } from '@/components/data-grid/data-grid-dummy';

export const DataDatabases = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5.semiBold">Databases</Typography>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};
