import {
  Business as CompanyIcon,
  Person as UserIcon,
} from '@mui/icons-material';
import React from 'react';
import { Path } from '@/constants/path';

export const menus = [
  {
    id: Path.COMPANY,
    title: '회사 관리',
    path: Path.COMPANY,
    icon: <CompanyIcon />,
  },
  {
    id: Path.USER,
    title: '사용자 관리',
    path: Path.USER,
    icon: <UserIcon />,
  },
];
