import React from 'react';
import { Box, Typography } from '@mui/material';
import { columns, rows } from '@/components/data-grid/data-grid-dummy';
import { DataGrid } from '@/components/data-grid';

export const Project = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5.semiBold">Worksheets</Typography>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};
