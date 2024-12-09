import { GridToolbarContainer, useGridApiContext } from '@mui/x-data-grid';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  useTheme,
} from '@mui/material';
import { toast } from 'react-toastify';
import React from 'react';
import { ArrowDownward } from '@mui/icons-material';

export const DefaultToolbar = ({
  isToolbar = true,
  rows,
  paginationModel,
  setPaginationModel,
  extraActions,
  showExportButton = false, // 원래 true 인데, 당분간 false로 보여주지않도록 설정
  showPageSizeOptions = true,
}) => {
  const apiRef = useGridApiContext();
  const theme = useTheme();
  return (
    <Box>
      {isToolbar && (
        <GridToolbarContainer
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 0,
            py: 0,
            mb: theme.spacing(18 / 8),
          }}
        >
          {showPageSizeOptions && (
            <FormControl sx={{ minWidth: 140 }}>
              <Select
                value={paginationModel.pageSize}
                onChange={(e) => {
                  setPaginationModel({
                    ...paginationModel,
                    pageSize: e.target.value,
                    page: 0,
                  });
                }}
                // renderValue={(selected) =>
                //   !selected ? (
                //     <Typography
                //       variant="PlaceholderPlaceholder-md"
                //       sx={{
                //         color: (theme) =>
                //           theme.palette.vuexy['theme-color-muted-placeholder-text'],
                //       }}
                //     >
                //       10개씩 보기
                //     </Typography>
                //   ) : (
                //     selected
                //   )
                // }
                IconComponent={ArrowDownward}
              >
                <MenuItem value={5}>5개씩 보기</MenuItem>
                <MenuItem value={10}>10개씩 보기</MenuItem>
                <MenuItem value={20}>20개씩 보기</MenuItem>
                <MenuItem value={30}>30개씩 보기</MenuItem>
              </Select>
            </FormControl>
          )}
          <Box
            sx={{
              display: 'flex',
              columnGap: theme.spacing(1.75),
            }}
          >
            {extraActions}
            {showExportButton && (
              <Button
                variant="outlined"
                onClick={() => {
                  if (Array.isArray(rows) && rows.length) {
                    apiRef.current.exportDataAsCsv();
                  } else {
                    toast.warn('데이터가 없습니다');
                  }
                }}
              >
                내보내기
              </Button>
            )}
          </Box>
        </GridToolbarContainer>
      )}
    </Box>
  );
};
