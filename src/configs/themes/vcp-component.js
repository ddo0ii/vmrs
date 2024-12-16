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
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
          '&:hover': {
            backgroundColor: palette.primary.hover,
          },
          '&:active': {
            backgroundColor: palette.primary.active,
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
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: {
          fontFamily: VCPTypography.fontFamily,
          ...VCPTypography['body.medium.regular'],
          // backgroundColor: palette.background.paper,
          // color: palette.text.primary,
          '& .MuiInputBase-root': {
            borderRadius: 8,
            backgroundColor: palette.background.paper,
            // border: `1px solid ${palette.border.default}`,
            // '&:hover': { borderColor: palette.primary.light },
            '&:focus-within': {
              // borderColor: palette.primary.main,
              // boxShadow: `0 0 0 3px ${palette.primary.main}33`,
            },
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
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: {
          fontFamily: VCPTypography.fontFamily,
          ...VCPTypography['body.medium.regular'],
          borderRadius: 8,
          backgroundColor: palette.background.paper,
          // border: `1px solid ${palette.border.default}`,
          // '&:hover': { borderColor: palette.primary.light },
          '&.Mui-focused': {
            // borderColor: palette.primary.main,
            boxShadow: `0 0 0 3px ${palette.primary.main}33`,
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
      defaultProps: { size: 'small' },
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

    // Checkbox
    MuiCheckbox: {
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: {
          color: palette.primary.main,
          '&.Mui-checked': {
            color: palette.primary.main,
          },
          '&:hover': {
            backgroundColor: `${palette.primary.light}33`,
          },
        },
      },
    },

    // Radio
    MuiRadio: {
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: {
          color: palette.primary.main,
          '&.Mui-checked': {
            color: palette.primary.main,
          },
          '&:hover': {
            backgroundColor: `${palette.primary.light}33`,
          },
        },
      },
    },

    // Switch
    MuiSwitch: {
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: palette.primary.main,
            '& + .MuiSwitch-track': {
              backgroundColor: palette.primary.light,
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
          },
          '& .MuiTableBody-root': {
            ...VCPTypography['table.body'],
            backgroundColor: palette.table.body,
          },
        },
      },
    },

    // DataGrid
    MuiDataGrid: {
      defaultProps: {
        pageSize: 10,
        rowsPerPageOptions: [5, 10, 25],
      },
      styleOverrides: {
        root: {
          border: 'none',
          backgroundColor: palette.background.paper, // 배경색
          color: palette.text.primary, // 텍스트 색상
          '& .MuiInputBase-root': {
            fontSize: '0.9rem', // 드롭다운 숫자 크기
            '& .MuiSelect-root': {},
          },
          '& .MuiInputBase-inputSizeSmall': {
            padding: '0px', // 기본 패딩 제거
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: palette.background.paper,
          },
          '& .MuiDataGrid-columnHeaders': {
            // backgroundColor: mode === 'light' ? '#F4F6F8' : '#1D1D1D', // 헤더 배경색
            // color: mode === 'light' ? '#1F2937' : '#FFFFFF', // 헤더 텍스트 색상
            // borderBottom: `1px solid ${palette.border.default}`, // 헤더 하단 테두리
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            // fontWeight: 600, // 헤더 폰트 굵기
            // fontSize: '0.9rem',
          },
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            backgroundColor: palette.background.paper,
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiIconButton-root': {
            // 필터링 및 정렬 버튼 스타일
            marginLeft: '5px',
            padding: '6px', // 버튼 패딩
            width: '24px', // 버튼 너비
            height: '24px', // 버튼 높이
            color: palette.text.primary, // 기본 텍스트 색상
            backgroundColor: 'transparent', // 기본 배경색
            transition: 'background-color 0.3s ease', // 부드러운 전환 효과
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.05)', // 호버 시 배경색
            },
            '&:active': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)', // 클릭 시 배경색
            },
          },
          '& .MuiSvgIcon-root.MuiDataGrid-sortIcon': {
            width: '16px', // 아이콘 너비
            height: '16px', // 아이콘 높이
            fontSize: '16px', // 아이콘 크기
            color: palette.text.primary, // 아이콘 색상
          },
          '& .MuiDataGrid-row': {
            '&:hover': {
              backgroundColor: mode === 'light' ? '#F9FAFB' : '#2A2A2A', // 행 호버 배경색
            },
            '&:nth-of-type(even)': {
              // backgroundColor: mode === 'light' ? '#FFFFFF' : '#242424', // 짝수 행 배경색
            },
            '&:nth-of-type(odd)': {
              // backgroundColor: mode === 'light' ? '#F9FAFB' : '#1E1E1E', // 홀수 행 배경색
            },
          },
          '& .MuiDataGrid-cell': {
            // borderBottom: `1px solid ${palette.border.default}`, // 셀 하단 테두리
            // color: palette.text.primary, // 셀 텍스트 색상
          },
          '& .MuiDataGrid-footerContainer': {
            // backgroundColor: palette.background.paper, // 푸터 배경색
            // color: palette.text.primary, // 푸터 텍스트 색상
          },
          '& .MuiDataGrid-toolbarContainer': {
            // backgroundColor: palette.background.paper, // 툴바 배경색
            // borderBottom: `1px solid ${palette.border.default}`, // 툴바 하단 테두리
          },
        },
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
            color: palette.primary.contrastText,
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
          borderRadius: 8,
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
