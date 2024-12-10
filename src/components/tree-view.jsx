import React from 'react';
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

export const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  marginBottom: theme.spacing(0.3),
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  // paddingRight: theme.spacing(1),
  fontSize: theme.typography['body.small.regular'].fontSize,
  fontWeight: theme.typography['body.small.regular'].fontWeight,
  '&.expanded': {
    fontWeight: theme.typography['body.small.bold'].fontWeight,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.focused, &.selected, &.selected.focused': {
    backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
    color: 'var(--tree-view-color)',
  },
}));

export const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(
  ({ theme }) => ({
    marginRight: theme.spacing(1),
    '& .MuiSvgIcon-root': {
      fontSize: '1rem', // 아이콘 크기
      color: theme.palette.text.primary,
    },
  }),
);

export const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(
  ({ theme }) => ({
    marginLeft: 0,
    [`& .content`]: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

export const CustomTreeItem = React.forwardRef(
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
                    color: theme.palette.text.primary,
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
