import React, { useMemo } from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import { LineChart } from '@mui/x-charts';

const xLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
export const DashboardPaper = ({
  title = 'title',
  count = 0,
  period = 'Last 30 days',
  chartColor = '#D1C4E9',
}) => {
  const theme = useTheme();

  // 숫자를 , 로 포맷하는 함수
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // 랜덤 데이터 생성 함수
  const generateRandomData = (length, min, max) => {
    return Array.from({ length }, () =>
      Math.floor(Math.random() * (max - min + 1) + min),
    );
  };

  // 랜덤 데이터 생성
  const uData = useMemo(
    () => generateRandomData(xLabels.length, 1000, 5000),
    [],
  );

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
        p: 2,
        border: `1px solid ${theme.palette.border.default}`,
        borderRadius: 3,
        flexGrow: 1,
      }}
    >
      <Typography variant="body.small.regular">{title}</Typography>
      <Typography variant="h5.semiBold">{formatNumber(count)}</Typography>
      <Typography
        variant="body.xSmall.regular"
        sx={{ color: theme.palette.text.secondary }}
      >
        {period}
      </Typography>
      <LineChart
        series={[
          {
            data: uData,
            area: true,
            showMark: false,
            color: chartColor,
          },
        ]}
        leftAxis={null}
        bottomAxis={null}
        width={350}
        height={50}
        margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
        axisHighlight={{ x: 'none', y: 'none' }}
        sx={{ p: 0, m: 0 }}
      />
    </Paper>
  );
};
