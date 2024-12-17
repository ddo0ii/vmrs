import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DashboardPaper } from '@/components/dashboard/paper';
import { DataGrid } from '@/components/data-grid';
import { columns, rows } from '@/components/data-grid/data-grid-dummy';

export const DashBoard = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <Typography variant="h5.semiBold">Assets</Typography>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <DashboardPaper
          title="Total Customers"
          count="1200"
          chartColor="#D1C4E9"
        />
        <DashboardPaper
          title="Total data Assets"
          count="65200"
          chartColor="#FFCDD2"
        />
        <DashboardPaper
          title="Cnt of Data transfer today"
          count="349584"
          chartColor="#DCEDC8"
        />
        <DashboardPaper
          title="Total Data Customer"
          count="347890"
          chartColor="#FFE0B2"
        />
      </Box>
      <Typography variant="h5.semiBold" sx={{ mt: 3 }}>
        Details
      </Typography>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};
