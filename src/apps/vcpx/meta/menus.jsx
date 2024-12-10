import {
  DashboardOutlined as DashBoardIcon,
  DatasetOutlined as DataIcon,
  PaymentOutlined as PaymentIcon,
  SummarizeOutlined as ProjectIcon,
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
    id: Path.PROJECT,
    title: 'Project',
    path: Path.PROJECT,
    icon: ProjectIcon,
  },
  {
    id: Path.DATA,
    title: 'Data',
    path: Path.DATA,
    icon: DataIcon,
  },
  {
    id: Path.BILLING,
    title: 'Billing',
    path: Path.BILLING,
    icon: PaymentIcon,
  },
];
