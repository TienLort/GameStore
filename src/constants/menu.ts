import { Home, HomeOutlined } from '@mui/icons-material';
import { IMenuRoute } from 'src/types/route';
import { CPath } from './path';

export const CMenuList: IMenuRoute[] = [
  {
    title: 'Chỉ số môi trường',
    path: CPath.home,
    icon: HomeOutlined,
    activeIcon: Home,
  },
];
