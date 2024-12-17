import React, { forwardRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  TreeItem2Content,
  TreeItem2GroupTransition,
  TreeItem2IconContainer,
  TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2';
import { useTreeItem2 } from '@mui/x-tree-view/useTreeItem2';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import clsx from 'clsx';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { Box, Typography } from '@mui/material';

const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  display: 'inline-flex', // 텍스트와 아이콘 주변만 강조
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(1), // 모서리 둥글게
  padding: theme.spacing(0.5, 1), // 패딩 설정 (상하 0.5, 좌우 1)
  fontSize: theme.typography['body.small.regular'].fontSize,
  fontWeight: theme.typography['body.small.regular'].fontWeight,
  '&.selected': {
    backgroundColor: theme.palette.action.selected, // 선택된 항목 배경색
    color: theme.palette.primary.main, // 선택된 항목 텍스트 색상
    fontWeight: theme.typography['body.small.bold'].fontWeight,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover, // 호버 시 배경색
  },
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(
  ({ theme }) => ({
    marginRight: theme.spacing(1),
    '& .MuiSvgIcon-root': {
      fontSize: '1rem', // 아이콘 크기
      color: theme.palette.text.primary,
    },
  }),
);

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(
  ({ theme }) => ({
    marginLeft: 0,
    [`& .content`]: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

export const DrawerCustomTreeItem = forwardRef(
  function CustomTreeItem(props, ref) {
    const theme = useTheme();
    const {
      id,
      itemId,
      label,
      disabled,
      children,
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      colorForDarkMode,
      bgColorForDarkMode,
      ...other
    } = props;

    const {
      getRootProps,
      getContentProps,
      getIconContainerProps,
      getLabelProps,
      getGroupTransitionProps,
      status,
    } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

    const style = {
      '--tree-view-color':
        theme.palette.mode !== 'dark' ? color : colorForDarkMode,
      '--tree-view-bg-color':
        theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
    };

    return (
      <TreeItem2Provider itemId={itemId}>
        <CustomTreeItemRoot {...getRootProps({ ...other, style })}>
          <CustomTreeItemContent
            {...getContentProps({
              className: clsx('content', {
                expanded: status.expanded,
                selected: status.selected,
                focused: status.focused,
              }),
            })}
          >
            <CustomTreeItemIconContainer {...getIconContainerProps()}>
              <TreeItem2Icon status={status} />
            </CustomTreeItemIconContainer>
            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
                p: 0.5,
                pr: 0,
              }}
            >
              <Box
                component={LabelIcon}
                color="inherit"
                sx={{
                  mr: 2,
                  fontSize: theme.typography['body.small.semiBold'].fontSize,
                }}
              />
              <Typography
                {...getLabelProps({
                  variant: 'body.small.semiBold',
                  sx: {
                    display: 'flex',
                    flexGrow: 1,
                    color: status.selected
                      ? theme.palette.primary.main // 선택된 경우 글자 색상 변경
                      : theme.palette.text.primary, // 기본 색상
                    fontWeight: status.selected ? 600 : 400, // 선택된 경우 글자 두께 강조
                  },
                })}
              >
                {label}
              </Typography>
              {labelInfo && (
                <Typography
                  variant="caption"
                  color={theme.palette.text.secondary}
                >
                  {labelInfo}
                </Typography>
              )}
            </Box>
          </CustomTreeItemContent>
          {children && (
            <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />
          )}
        </CustomTreeItemRoot>
      </TreeItem2Provider>
    );
  },
);
