import React, { Suspense, useState } from 'react';
import {
  AppBar,
  Autocomplete,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Bedtime,
  Menu,
  NotificationsNoneOutlined,
  Search,
  WbSunny,
} from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import Person from '@/assets/images/person.jpg';
import { top100Films } from '@/apps/vcpx/pages/dashboard/top100Films';
import { VCPPalette } from '@/configs/themes/vcp-palette';
import { SideNavBar } from '@/components/side-nav-bar';

const drawerWidth = 240;

export const AppLayout = ({ menuData, mode, setMode, ...props }) => {
  const { window } = props;
  const theme = useTheme();
  const palette = VCPPalette(mode);
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Autocomplete
            disablePortal
            options={top100Films}
            sx={{
              flexGrow: 1,
              mr: 10,
              '& .MuiAutocomplete-endAdornment': {
                display: 'none', // 드롭다운 화살표 제거
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // 외곽선 제거
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

          {/* 테마 변경 버튼 */}
          <IconButton
            color="inherit"
            onClick={toggleThemeMode}
            sx={{
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)', // 호버 시 살짝 어두운 배경
              },
              '&:active': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // 클릭 시 더 강조된 배경
              },
            }}
          >
            {mode === 'light' ? <Bedtime /> : <WbSunny />}
          </IconButton>

          <IconButton
            sx={{
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)', // 동일한 호버 색상
              },
              '&:active': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // 동일한 클릭 색상
              },
            }}
          >
            <NotificationsNoneOutlined />
          </IconButton>
          {/* 아바타 */}
          <Button
            sx={{
              display: 'flex',
              gap: 1,
              boxShadow: 'none',
              p: 2,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              },
              '&:active': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Avatar src={Person} alt="avatar" sx={{ width: 32, height: 32 }} />
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 550,
                color: mode === 'light' ? '#1F2937' : '#FFFFFF',
              }}
            >
              Emma Watson
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={
            window !== undefined ? () => window().document.body : undefined
          }
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: palette.background.paper,
              // backgroundColor: mode === 'light' ? '#f8f9fa' : '#1d1d1d', // 드로어 배경색
              color: mode === 'light' ? '#2c3e50' : '#ffffff', // 드로어 텍스트 색상
            },
          }}
        >
          <SideNavBar menuData={menuData} mode={mode} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: palette.background.paper,
              // backgroundColor: mode === 'light' ? '#f5f6fa' : '#1d1d1d', // 배경 색상
              color: mode === 'light' ? '#7f8c8d' : '#bbbbbb', // 기본 텍스트 색상
              border: 'none', // 드로어의 경계선 제거
              boxShadow: 'none', // 드로어의 그림자 제거
            },
          }}
          open
        >
          <SideNavBar menuData={menuData} mode={mode} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: '24px 40px 24px',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: palette.background.default,
        }}
      >
        <Toolbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};
