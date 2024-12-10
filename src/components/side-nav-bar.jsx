import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from '@mui/material';
import Logo from '@/assets/images/logo.png';
import { useNavigate } from 'react-router-dom'; // react-router-dom 사용
import { Path } from '@/constants/path';

export const SideNavBar = ({ menuData, mode }) => {
  const theme = useTheme(); // theme에서 typography 사용
  const navigate = useNavigate(); // navigate 함수 사용

  // 스타일 정의
  const styles = {
    toolbar: {
      backgroundColor: mode === 'light' ? '#f5f6fa' : '#1d1d1d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listItemButton: {
      backgroundColor: 'transparent',
      color: mode === 'light' ? '#7f8c8d' : '#bbbbbb',
      '&:hover': {
        backgroundColor: mode === 'light' ? '#f2f2f2' : '#333333',
      },
      padding: '4px 8px', // 버튼 크기 축소
      minHeight: '40px', // 버튼 높이 조정
    },
    listItemIcon: {
      minWidth: '30px', // 아이콘의 최소 너비 조정
      '& .MuiSvgIcon-root': {
        fontSize: '14px', // 아이콘 크기 설정
      },
    },
    listItemText: {
      fontSize: '14px', // 글자 크기 설정
      '& .MuiTypography-root': {
        fontSize: '14px', // 내부 Typography 스타일 직접 조정
      },
    },
    logo: {
      cursor: 'pointer',
      width: '100px',
    },
  };

  return (
    <div>
      <Toolbar sx={styles.toolbar}>
        <img
          src={Logo}
          alt="VCP-X 로고"
          onClick={() => navigate(Path.HOME)}
          style={styles.logo}
        />
      </Toolbar>
      <Divider />
      <List>
        {menuData.map((menu) => (
          <ListItem key={menu.id} disablePadding>
            <ListItemButton
              onClick={() => navigate(menu.path)}
              sx={styles.listItemButton}
            >
              <ListItemIcon sx={styles.listItemIcon}>{menu.icon}</ListItemIcon>
              <ListItemText
                primary={menu.title}
                sx={styles.listItemText} // 텍스트 크기 조정
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
