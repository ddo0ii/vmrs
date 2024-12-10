import { VCPPalette } from './vcp-palette';
import { VCPTypography } from './vcp-typography';

export const VCPComponent = (mode) => {
  const palette = VCPPalette(mode);

  return {
    // Button
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: VCPTypography.fontFamily,
          ...VCPTypography['button.medium'],
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
          fontFamily: VCPTypography.fontFamily,
          ...VCPTypography['body.medium.regular'],
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
          borderRadius: 8,
          '& .MuiInputBase-root': {
            padding: '10px 14px',
            borderRadius: 8,
            backgroundColor: palette.background.paper,
            border: `1px solid ${palette.border.default}`,
          },
          '& .MuiInputBase-input::placeholder': {
            fontFamily: VCPTypography.fontFamily,
            ...VCPTypography['placeholder.medium'],
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
          fontFamily: VCPTypography.fontFamily,
          ...VCPTypography['body.medium.regular'],
          borderRadius: 8,
          backgroundColor: palette.background.paper,
          '& .MuiSelect-select': {
            padding: '10px 14px',
            borderRadius: 8,
            backgroundColor: palette.background.paper,
          },
        },
      },
    },

    // IconButton
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: VCPTypography.fontFamily,
          width: 40,
          height: 40,
          padding: 0,
          borderRadius: 8,
          backgroundColor: palette.background.paper,
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
          fontFamily: VCPTypography.fontFamily,
          ...VCPTypography['h2.regular'],
          height: 72,
          padding: '10px 24px',
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
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
          fontFamily: VCPTypography.fontFamily,
          '& .MuiInputBase-root': {
            ...VCPTypography['body.medium.regular'],
            padding: '10px 14px',
            borderRadius: 8,
            backgroundColor: palette.background.paper,
            '& .MuiInputBase-input::placeholder': {
              ...VCPTypography['placeholder.medium'],
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
          fontFamily: VCPTypography.fontFamily,
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
          fontFamily: VCPTypography.fontFamily,
          backgroundColor: palette.background.paper,
          '& .MuiTableHead-root': {
            ...VCPTypography['table.header'],
            backgroundColor: palette.table.header,
            color: palette.text.primary,
          },
          '& .MuiTableBody-root': {
            ...VCPTypography['table.body'],
            backgroundColor: palette.table.body,
            color: palette.text.secondary,
          },
        },
      },
    },

    // DataGrid
    MuiDataGrid: {
      defaultProps: {
        // disableRowSelectionOnClick: true,
        // disableColumnFilter: true,
        // disableColumnSelector: true,
        // disableDensitySelector: true,
        // disableColumnMenu: true,
      },
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiInputBase-root': {
            fontSize: '0.9rem', // 드롭다운 숫자 크기
            '& .MuiSelect-root': {},
          },
          // '& .MuiInputBase-root': {
          //   '& .MuiSelect-root': {},
          // },
          '& .MuiInputBase-inputSizeSmall': {
            padding: '0px', // 기본 패딩 제거
          },
          '& .MuiSelect-select': {},
          '& .MuiSelect-icon': {},
          '& .MuiTablePagination-root': {},
          '& .MuiDataGrid-footerContainer': {},
          '& .MuiDataGrid-cell': {},
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            backgroundColor: palette.background.paper,
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: palette.background.paper,
          },
          // '& .MuiDataGrid-columnHeaders': {},
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-row:hover': {},
        },
      },
    },

    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
    },

    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
    },

    MuiSwitch: {
      defaultProps: {
        size: 'small',
      },
    },

    // Chip
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: VCPTypography.fontFamily,
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
          fontFamily: VCPTypography.fontFamily,
          ...VCPTypography['body.small.regular'],
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
          fontFamily: VCPTypography.fontFamily,
          backgroundColor: palette.background.overlay,
          color: palette.text.primary,
        },
      },
    },

    // Alert
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: VCPTypography.fontFamily,
          ...VCPTypography['body.medium.regular'],
          borderRadius: 8,
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
