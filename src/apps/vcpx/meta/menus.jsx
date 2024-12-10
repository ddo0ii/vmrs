import {
  DashboardOutlined as DashBoardIcon,
  PaymentOutlined as PaymentIcon,
  SearchOutlined as SearchIcon,
} from '@mui/icons-material';
import { Path } from '@/constants/path';

export const menus = [
  {
    id: Path.DASHBOARD,
    title: 'Dashboard',
    path: Path.DASHBOARD,
    icon: DashBoardIcon,
  },
  {
    id: Path.COMPANY,
    title: 'Search',
    path: Path.COMPANY,
    icon: SearchIcon,
  },
  {
    id: Path.BILLING,
    title: 'Billing',
    path: Path.BILLING,
    icon: PaymentIcon,
  },
];
