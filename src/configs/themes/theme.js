import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#2c3e50',
            contrastText: '#ffffff',
          },
          background: {
            default: '#f8f9fa',
            paper: '#ffffff',
          },
          text: {
            primary: '#2c3e50',
            secondary: '#7f8c8d',
          },
        }
      : {
          primary: {
            main: '#90caf9',
            contrastText: '#000000',
          },
          background: {
            default: '#121212',
            paper: '#1d1d1d',
          },
          text: {
            primary: '#ffffff',
            secondary: '#bbbbbb',
          },
        }),
  },
  typography: {
    // fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontFamily: 'Pretendard',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: mode === 'light' ? '#2c3e50' : '#ffffff',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: mode === 'light' ? '#2c3e50' : '#ffffff',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: mode === 'light' ? '#2c3e50' : '#ffffff',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.75,
      textTransform: 'none',
    },
    textField: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    select: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 600,
          lineHeight: 1.75,
          textTransform: 'none',
          padding: '8px 16px',
          borderRadius: 8,
          boxShadow:
            mode === 'light'
              ? '0px 2px 4px rgba(0, 0, 0, 0.1)'
              : '0px 2px 4px rgba(255, 255, 255, 0.1)',
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
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: 1.5,
          '& .MuiInputBase-root': {
            borderRadius: 5,
            padding: '8px 12px',
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: 1.5,
          '& .MuiSelect-select': {
            padding: '8px 12px',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
          padding: 0,
          '& .MuiSvgIcon-root': {
            width: 16,
            height: 16,
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 60,
          padding: '8px 24px',
          backgroundColor: mode === 'light' ? '#fcfcfc' : '#1d1d1d',
          color: mode === 'light' ? '#2c3e50' : '#ffffff',
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            fontSize: '0.875rem',
            fontWeight: 400,
            padding: '8px 12px',
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
