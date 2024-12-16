import React from 'react';
import {
  Autocomplete,
  Box,
  Button,
  InputAdornment,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { DashboardPaper } from '@/components/dashboard/paper';
import { DataGrid } from '@/components/data-grid';
import { columns, rows } from '@/components/data-grid/data-grid-dummy';
import { top100Films } from '@/apps/vcpx/pages/dashboard/top100Films';
import { Search } from '@mui/icons-material';

export const DashBoard = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Button>helloo</Button>
      <TextField placeholder="입력하세요 아주많이" />
      <Select />
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{
          flexGrow: 1,
          mr: 10,
          '& .MuiAutocomplete-endAdornment': {
            display: 'none', // 드롭다운 화살표 제거
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for Data Assets"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{ position: 'absolute', left: 8 }}
                >
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiInputBase-input': { marginLeft: '30px' } }}
          />
        )}
      />
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
