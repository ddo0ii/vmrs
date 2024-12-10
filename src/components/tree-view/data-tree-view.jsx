import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import {
  TreeItem2Content,
  TreeItem2GroupTransition,
  TreeItem2IconContainer,
  TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { useTreeItem2 } from '@mui/x-tree-view/useTreeItem2';
import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import { Description, Folder, FolderOpen } from '@mui/icons-material';

// Tree Item 스타일 정의
const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.expanded, &.focused, &.selected, &.selected.focused': {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.text.primary,
  },
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(
  ({ theme }) => ({
    marginRight: theme.spacing(1),
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },
  }),
);

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(
  ({ theme }) => ({
    marginLeft: theme.spacing(2),
  }),
);

// Custom Tree Item 컴포넌트
const CustomTreeItem = forwardRef(function CustomTreeItem(props, ref) {
  const { id, itemId, label, children, labelIcon: LabelIcon, ...other } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, rootRef: ref });

  return (
    <TreeItem2Provider itemId={itemId}>
      <CustomTreeItemRoot {...getRootProps(other)}>
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
            {status.expanded ? <FolderOpen /> : <Folder />}
          </CustomTreeItemIconContainer>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              {...getLabelProps({
                variant: 'body2',
                sx: { fontWeight: status.selected ? 'bold' : 'inherit' },
              })}
            >
              {label}
            </Typography>
          </Box>
        </CustomTreeItemContent>
        {children && (
          <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />
        )}
      </CustomTreeItemRoot>
    </TreeItem2Provider>
  );
});

// 트리 데이터 샘플
const treeData = [
  {
    id: '1',
    label: 'CSV_SAMPLE',
    children: [
      {
        id: '1-1',
        label: 'INFORMATION_SCHEMA',
        children: [
          { id: '1-1-1', label: 'Views', icon: Description },
          { id: '1-1-2', label: 'Public', icon: Description },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'SAMPLE_DB',
    children: [
      {
        id: '2-1',
        label: 'INFORMATION_SCHEMA',
        children: [
          { id: '2-1-1', label: 'Views', icon: Description },
          { id: '2-1-2', label: 'Functions', icon: Description },
        ],
      },
    ],
  },
];

// Tree View 컴포넌트
export const CustomTreeView = () => {
  const renderTree = (nodes) => (
    <CustomTreeItem key={nodes.id} itemId={nodes.id} label={nodes.label}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </CustomTreeItem>
  );

  return (
    <SimpleTreeView
      aria-label="database-tree-view"
      defaultExpandedItems={['1', '2']}
    >
      {treeData.map((tree) => renderTree(tree))}
    </SimpleTreeView>
  );
};
