import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#2c3e50', // 메인 색상
            light: '#546e7a', // 밝은 변형
            dark: '#1c2833', // 어두운 변형
            contrastText: '#ffffff', // 텍스트 대비 색상
            hover: '#34495e', // 호버 상태 색상
            focus: '#1b4f72', // 포커스 상태 색상
            border: '#dcdfe3', // 테두리 색상
          },
          secondary: {
            main: '#16a085',
            light: '#48c9b0',
            dark: '#0e6655',
            contrastText: '#ffffff',
            hover: '#1abc9c',
            focus: '#117a65',
            border: '#aed6f1',
          },
          error: {
            main: '#e74c3c',
            light: '#f1948a',
            dark: '#922b21',
            contrastText: '#ffffff',
          },
          warning: {
            main: '#f39c12',
            light: '#f7dc6f',
            dark: '#9c640c',
            contrastText: '#ffffff',
          },
          info: {
            main: '#3498db',
            light: '#85c1e9',
            dark: '#21618c',
            contrastText: '#ffffff',
          },
          success: {
            main: '#27ae60',
            light: '#82e0aa',
            dark: '#1e8449',
            contrastText: '#ffffff',
          },
          background: {
            default: '#f8f9fa',
            paper: '#ffffff',
            contrast: '#e9ecef', // 추가 대비 배경
            overlay: 'rgba(0, 0, 0, 0.1)', // 반투명 오버레이
          },
          text: {
            primary: '#2c3e50',
            secondary: '#7f8c8d',
            disabled: '#b2babb',
            hint: '#d5dbdb',
          },
        }
      : {
          primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#42a5f5',
            contrastText: '#000000',
            hover: '#64b5f6',
            focus: '#1e88e5',
            border: '#bbdefb',
          },
          secondary: {
            main: '#26a69a',
            light: '#80cbc4',
            dark: '#004d40',
            contrastText: '#ffffff',
            hover: '#4db6ac',
            focus: '#00796b',
            border: '#80deea',
          },
          error: {
            main: '#e57373',
            light: '#ffcdd2',
            dark: '#d32f2f',
            contrastText: '#ffffff',
          },
          warning: {
            main: '#ffb74d',
            light: '#ffe082',
            dark: '#f57c00',
            contrastText: '#ffffff',
          },
          info: {
            main: '#64b5f6',
            light: '#bbdefb',
            dark: '#1e88e5',
            contrastText: '#ffffff',
          },
          success: {
            main: '#81c784',
            light: '#c8e6c9',
            dark: '#388e3c',
            contrastText: '#ffffff',
          },
          background: {
            default: '#121212',
            paper: '#1d1d1d',
            contrast: '#2a2a2a',
            overlay: 'rgba(255, 255, 255, 0.1)',
          },
          text: {
            primary: '#ffffff',
            secondary: '#bbbbbb',
            disabled: '#777777',
            hint: '#888888',
          },
        }),
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: mode === 'light' ? '#2c3e50' : '#ffffff',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: mode === 'light' ? '#2c3e50' : '#ffffff',
    },
    body1: {
      fontSize: '1rem',
      color: mode === 'light' ? '#2c3e50' : '#ffffff',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '10px 20px',
          boxShadow:
            mode === 'light'
              ? '0px 3px 6px rgba(0, 0, 0, 0.1)'
              : '0px 3px 6px rgba(255, 255, 255, 0.1)',
        },
        containedPrimary: {
          backgroundColor: mode === 'light' ? '#2c3e50' : '#90caf9',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: mode === 'light' ? '#34495e' : '#64b5f6',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow:
            mode === 'light'
              ? '0px 4px 12px rgba(0, 0, 0, 0.1)'
              : '0px 4px 12px rgba(255, 255, 255, 0.1)',
          backgroundColor: mode === 'light' ? '#ffffff' : '#1d1d1d',
          color: mode === 'light' ? '#2c3e50' : '#ffffff',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0 10px',
          backgroundColor: mode === 'light' ? '#ffffff' : '#1d1d1d',
        },
      },
    },
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
