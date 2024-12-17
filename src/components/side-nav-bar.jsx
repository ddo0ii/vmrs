import React from 'react';
import { Toolbar } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import Logo from '@/assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { DrawerCustomTreeItem } from '@/components/tree-view/drawer-tree-view';
import { Path } from '@/constants/path';
import { useTheme } from '@mui/material/styles';

export const SideNavBar = ({ menuData, mode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기

  return (
    <div>
      <Toolbar
        sx={{
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          alignItems: 'center',
          ml: 2,
        }}
      >
        <img
          src={Logo}
          alt="VCP-X 로고"
          onClick={() => navigate(Path.HOME)}
          style={{ cursor: 'pointer', width: '100px' }}
        />
      </Toolbar>
      <SimpleTreeView
        aria-label="side navigation"
        defaultExpandedItems={['1']}
        slots={{ expandIcon: ChevronRight, collapseIcon: ExpandMore }}
        sx={{ flexGrow: 1, maxWidth: 400, ml: 2, mr: 2, mt: 3 }}
      >
        {menuData.map((menu) => (
          <DrawerCustomTreeItem
            key={menu.id}
            itemId={menu.id}
            label={menu.title}
            labelIcon={menu.icon}
            onClick={() => navigate(menu.path)}
            // selected={location.pathname === menu.path} // 현재 경로와 메뉴 경로를 비교
          />
        ))}
      </SimpleTreeView>
    </div>
  );
};
