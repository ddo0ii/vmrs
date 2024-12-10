import {
  BusinessOutlined as CompanyIcon,
  CreditScoreOutlined as BillingIcon,
  DashboardOutlined as DashboardIcon,
} from '@mui/icons-material';
import React from 'react';
import { Path } from '@/constants/path';

export const menus = [
  {
    id: Path.DASHBOARD,
    title: '대시보드',
    path: Path.DASHBOARD,
    icon: <DashboardIcon />,
  },
  {
    id: Path.COMPANY,
    title: '회사 관리',
    path: Path.COMPANY,
    icon: <CompanyIcon />,
  },
  {
    id: Path.BILLING,
    title: '정산 관리',
    path: Path.BILLING,
    icon: <BillingIcon />,
  },
];
