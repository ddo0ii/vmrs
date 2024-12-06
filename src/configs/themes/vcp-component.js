import { VCPPalette } from './vcp-palette';
import { VCPTypography } from './vcp-typography';

export const VCPComponent = (mode) => {
  const palette = VCPPalette(mode);
  const typography = VCPTypography;

  return {
    // Button
    MuiButton: {
      styleOverrides: {
        root: {
          ...typography.button.medium,
          textTransform: 'none',
          padding: '10px 20px',
          borderRadius: 12,
          backgroundColor: palette.button.default,
          color: palette.text.primary,
          boxShadow:
            mode === 'light'
              ? '0px 4px 8px rgba(0, 0, 0, 0.1)'
              : '0px 4px 8px rgba(255, 255, 255, 0.1)',
          '&:hover': {
            backgroundColor: palette.button.hover,
          },
          '&:active': {
            backgroundColor: palette.button.active,
          },
          '&:disabled': {
            backgroundColor: palette.button.disabled,
            color: palette.text.disabled,
          },
        },
      },
    },

    // TextField
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          ...typography.body.medium,
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
          borderRadius: 8,
          '& .MuiInputBase-root': {
            padding: '10px 14px',
            borderRadius: 8,
            backgroundColor: palette.background.default,
            border: `1px solid ${palette.border.default}`,
          },
          '& .MuiInputBase-input::placeholder': {
            ...typography.placeholder.medium,
            color: palette.text.placeholder,
          },
        },
      },
    },

    // Select
    MuiSelect: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          ...typography.body.medium,
          borderRadius: 8,
          backgroundColor: palette.background.paper,
          '& .MuiSelect-select': {
            padding: '10px 14px',
            borderRadius: 8,
            backgroundColor: palette.background.default,
          },
        },
      },
    },

    // IconButton
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
          padding: 0,
          borderRadius: 8,
          backgroundColor: palette.background.default,
          '&:hover': {
            backgroundColor: palette.button.hover,
          },
          '&:active': {
            backgroundColor: palette.button.active,
          },
          '& .MuiSvgIcon-root': {
            width: 24,
            height: 24,
            color: palette.text.primary,
          },
        },
      },
    },

    // Toolbar
    MuiToolbar: {
      styleOverrides: {
        root: {
          ...typography.h2.regular,
          height: 72,
          padding: '10px 24px',
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
          borderBottom: `2px solid ${palette.border.default}`,
        },
      },
    },

    // Autocomplete
    MuiAutocomplete: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            ...typography.body.medium,
            padding: '10px 14px',
            borderRadius: 8,
            backgroundColor: palette.background.default,
            '& .MuiInputBase-input::placeholder': {
              ...typography.placeholder.medium,
              color: palette.text.placeholder,
            },
          },
        },
      },
    },

    // Card
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow:
            mode === 'light'
              ? '0px 6px 12px rgba(0, 0, 0, 0.1)'
              : '0px 6px 12px rgba(255, 255, 255, 0.1)',
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
          padding: '20px',
        },
      },
    },

    // Table
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          '& .MuiTableHead-root': {
            ...typography.table.header,
            backgroundColor: palette.table.header,
            color: palette.text.primary,
          },
          '& .MuiTableBody-root': {
            ...typography.table.body,
            backgroundColor: palette.table.body,
            color: palette.text.secondary,
          },
        },
      },
    },

    // Chip
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: palette.primary.light,
          color: palette.text.primary,
          '&:hover': {
            backgroundColor: palette.primary.main,
          },
        },
      },
    },

    // Tooltip
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          ...typography.body.small,
          backgroundColor: palette.background.contrast,
          color: palette.text.primary,
          borderRadius: 6,
          padding: '8px 16px',
        },
      },
    },

    // Snackbar
    MuiSnackbar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.overlay,
          color: palette.text.primary,
        },
      },
    },

    // Alert
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          ...typography.body.medium,
          padding: '12px 20px',
          '&.MuiAlert-standardSuccess': {
            backgroundColor: palette.success.light,
            color: palette.success.dark,
          },
          '&.MuiAlert-standardError': {
            backgroundColor: palette.danger.light,
            color: palette.danger.dark,
          },
          '&.MuiAlert-standardWarning': {
            backgroundColor: palette.warning.light,
            color: palette.warning.dark,
          },
          '&.MuiAlert-standardInfo': {
            backgroundColor: palette.info.light,
            color: palette.info.dark,
          },
        },
      },
    },
  };
};
