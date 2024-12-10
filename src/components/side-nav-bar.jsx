import React from 'react';
import { Toolbar } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import Logo from '@/assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { DrawerCustomTreeItem } from '@/components/tree-view/drawer-tree-view';

// SideNavBar 컴포넌트
export const SideNavBar = ({ menuData, mode }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar
        sx={{
          backgroundColor: mode === 'light' ? '#f5f6fa' : '#1d1d1d',
          display: 'flex',
          alignItems: 'center',
          ml: 2,
        }}
      >
        <img
          src={Logo}
          alt="VCP-X 로고"
          onClick={() => navigate(Path.DASHBOARD)}
          style={{ cursor: 'pointer', width: '100px' }}
        />
      </Toolbar>
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
          <DrawerCustomTreeItem
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
