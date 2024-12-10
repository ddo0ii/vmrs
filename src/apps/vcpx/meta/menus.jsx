import {
  BusinessOutlined,
  DashboardOutlined,
  PaymentOutlined,
} from '@mui/icons-material';
import { Path } from '@/constants/path';

export const menus = [
  {
    id: 'dashboard',
    title: '대시보드',
    path: Path.DASHBOARD,
    icon: DashboardOutlined, // 컴포넌트로 전달
  },
  {
    id: 'company',
    title: '회사 관리',
    path: Path.COMPANY,
    icon: BusinessOutlined, // 컴포넌트로 전달
  },
  {
    id: 'billing',
    title: '정산 관리',
    path: Path.BILLING,
    icon: PaymentOutlined, // 컴포넌트로 전달
  },
];
