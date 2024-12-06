import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Cloud } from '@mui/icons-material';

export const DashboardPaper = ({
  icon = <Cloud />,
  title = 'title',
  subTitle = 'subTitle',
}) => {
  return (
    <Paper
      elevation={0}
      sx={{ flexGrow: 1, p: 2, border: '1px solid pink', borderRadius: 4 }}
    >
      <Typography>{icon}</Typography>
      <Typography>{title}</Typography>
      <Typography>{subTitle}</Typography>
    </Paper>
  );
};
