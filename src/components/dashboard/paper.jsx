import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Cloud } from '@mui/icons-material';

export const DashboardPaper = ({
  icon = <Cloud />,
  title = 'title',
  subTitle = 'subTitle',
}) => {
  return (
    <Paper sx={{ flexGrow: 1, p: 2 }}>
      <Typography>{icon}</Typography>
      <Typography>{title}</Typography>
      <Typography>{subTitle}</Typography>
    </Paper>
  );
};
