import React from 'react';
import { Box, Typography } from '@mui/material';
import { DashboardPaper } from '@/components/dashboard/paper';

export const DashBoard = () => {
  return (
    <Box>
      <Typography>Quick actions</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <DashboardPaper />
        <DashboardPaper />
        <DashboardPaper />
        <DashboardPaper />
      </Box>
    </Box>
  );
};
