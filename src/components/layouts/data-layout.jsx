import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { CustomTreeView } from '@/components/tree-view/data-tree-view';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DataTreeData } from '@/components/tree-view/data-tree-dummy';

export const DataLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <CustomTreeView treeData={DataTreeData} />
      <Divider sx={{ border: `1px solid ${theme.palette.border.default}` }} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: '0 40px 24px',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};
