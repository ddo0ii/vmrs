import React, { Suspense, useState } from 'react';
import {
  AppBar,
  Autocomplete,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Bedtime,
  Inbox,
  Mail,
  Menu,
  NotificationsNoneOutlined,
  Search,
  WbSunny,
} from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Path } from '@/constants/path';
import Logo from '@/assets/images/logo.png';
import Person from '@/assets/images/person.jpg';
import { top100Films } from '@/apps/vcpx/pages/dashboard/top100Films';
import { VCPPalette } from '@/configs/themes/vcp-palette';

const drawerWidth = 240;

export const AppLayout = ({ mode, setMode, ...props }) => {
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

  const drawer = (
    <div>
      <Toolbar
        // sx={{ backgroundColor: palette.background.paper }}
        sx={{ backgroundColor: mode === 'light' ? '#f5f6fa' : '#1d1d1d' }}
      >
        <img
          src={Logo}
          alt="VCP-X 로고"
          onClick={() => navigate(Path.HOME)}
          style={{ cursor: 'pointer', width: '100px' }}
        />
      </Toolbar>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: 'transparent',
                color: mode === 'light' ? '#7f8c8d' : '#bbbbbb',
                '&:hover': {
                  backgroundColor: mode === 'light' ? '#f2f2f2' : '#333333', // 호버 색상
                },
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
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
            sx={{ backgroundColor: 'transparent' }}
          >
            {mode === 'light' ? <Bedtime /> : <WbSunny />}
          </IconButton>
          <IconButton sx={{ backgroundColor: 'transparent' }}>
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
            }}
          >
            <Avatar src={Person} alt="avatar" sx={{ width: 32, height: 32 }} />
            <Typography sx={{ fontSize: '14px', fontWeight: 550 }}>
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
              backgroundColor: mode === 'light' ? '#f8f9fa' : '#1d1d1d', // 드로어 배경색
              color: mode === 'light' ? '#2c3e50' : '#ffffff', // 드로어 텍스트 색상
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: mode === 'light' ? '#f5f6fa' : '#1d1d1d', // 배경 색상
              color: mode === 'light' ? '#7f8c8d' : '#bbbbbb', // 기본 텍스트 색상
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: '0 40px 24px',
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
