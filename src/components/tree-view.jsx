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

export const TreeView = () => {
  return <div></div>;
};

// Custom Tree Item 스타일 정의
export const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  marginBottom: theme.spacing(0.3),
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  paddingRight: theme.spacing(1),
  fontWeight: theme.typography.fontWeightMedium,
  '&.expanded': {
    fontWeight: theme.typography.fontWeightRegular,
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

// CustomTreeItem 컴포넌트
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
              <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
              <Typography
                {...getLabelProps({
                  variant: 'body2',
                  sx: { display: 'flex', fontWeight: 'inherit', flexGrow: 1 },
                })}
              >
                {label}
              </Typography>
              {labelInfo && (
                <Typography variant="caption" color="inherit">
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
