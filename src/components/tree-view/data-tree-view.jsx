import React, { forwardRef, useState } from 'react';
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
import {
  Folder,
  FolderOpen,
  InsertChart,
  TableChart,
  TextFields,
} from '@mui/icons-material';

// Tree Item 스타일 정의
const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(0.5),
  fontSize: '0.8rem',
  '&:hover': {
    backgroundColor: '#e3f2fd',
  },
  '&.selected': {
    backgroundColor: '#bbdefb',
    color: theme.palette.text.primary,
  },
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(
  ({ theme }) => ({
    marginRight: theme.spacing(0.5),
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },
  }),
);

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(
  ({ theme }) => ({
    marginLeft: theme.spacing(1),
  }),
);

// Custom Tree Item 컴포넌트
const CustomTreeItem = forwardRef(function CustomTreeItem(props, ref) {
  const { id, itemId, label, children, depth, selected, onClick, ...other } =
    props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, rootRef: ref });

  // 계층에 따라 아이콘 선택
  const getIconByDepth = () => {
    if (depth === 0) return status.expanded ? <FolderOpen /> : <Folder />; // 데이터베이스
    if (depth === 1) return <InsertChart />; // 스키마
    if (depth === 2) return <TableChart />; // 테이블/뷰
    return <TextFields />; // 기타
  };

  return (
    <TreeItem2Provider itemId={itemId}>
      <CustomTreeItemRoot {...getRootProps(other)}>
        <CustomTreeItemContent
          {...getContentProps({
            className: clsx('content', {
              expanded: status.expanded,
              selected: selected,
            }),
            onClick: () => onClick(itemId),
          })}
        >
          <CustomTreeItemIconContainer {...getIconContainerProps()}>
            {getIconByDepth()}
          </CustomTreeItemIconContainer>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              {...getLabelProps({
                variant: 'body2',
                sx: { fontWeight: selected ? 'bold' : 'inherit' },
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

// Tree View 컴포넌트
export const CustomTreeView = ({ treeData }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderTree = (nodes, depth = 0) => (
    <CustomTreeItem
      key={nodes.id}
      itemId={nodes.id}
      label={nodes.label}
      depth={depth} // 현재 깊이 전달
      selected={selectedItem === nodes.id}
      onClick={(id) => setSelectedItem(id)}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node, depth + 1))
        : null}
    </CustomTreeItem>
  );

  return (
    <SimpleTreeView
      aria-label="database-tree-view"
      defaultExpandedItems={['1']}
      sx={{ width: '300px', fontSize: '0.8rem' }}
    >
      {treeData.map((tree) => renderTree(tree))}
    </SimpleTreeView>
  );
};
