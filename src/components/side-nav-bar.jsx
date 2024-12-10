import React from 'react';
import { Divider, Toolbar } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import Logo from '@/assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { CustomTreeItem } from '@/components/tree-view';

// SideNavBar 컴포넌트
export const SideNavBar = ({ menuData, mode }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar
        sx={{
          backgroundColor: mode === 'light' ? '#f5f6fa' : '#1d1d1d',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={Logo}
          alt="VCP-X 로고"
          onClick={() => navigate(Path.HOME)}
          style={{ cursor: 'pointer', width: '100px' }}
        />
      </Toolbar>
      <Divider />
      <SimpleTreeView
        aria-label="side navigation"
        defaultExpandedItems={['1']}
        slots={{
          expandIcon: ChevronRight,
          collapseIcon: ExpandMore,
        }}
        sx={{ flexGrow: 1, maxWidth: 400 }}
      >
        {menuData.map((menu) => (
          <CustomTreeItem
            key={menu.id}
            itemId={menu.id}
            label={menu.title}
            labelIcon={menu.icon}
            onClick={() => navigate(menu.path)}
          />
        ))}
      </SimpleTreeView>
    </div>
  );
};
