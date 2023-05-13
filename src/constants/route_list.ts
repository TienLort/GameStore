import React from 'react';
import NotFound from 'src/components/not_found';

import AdminLayout from 'src/layout/portal_layout';
import DefaultLayout from 'src/layout/default_layout';
// import News from 'src/pages/news';
// import NewsDetail from 'src/pages/news/new_detail';

const Home = React.lazy(() => import('src/pages/home'));
const gameList = React.lazy(() => import('src/pages/game_list'));
const landingPage = React.lazy(() => import('src/pages/landing_page'));
const gameDetails = React.lazy(() => import('src/pages/game_details'));
const posts = React.lazy(() => import('src/pages/posts'));
const newPosts = React.lazy(() => import('src/pages/posts/add_edit_post'));
const postsDetails = React.lazy(() => import('src/pages/posts_details'));
const profile = React.lazy(() => import('src/pages/profile'));
const bundles = React.lazy(() => import('src/pages/game_bundles'));
// const Map = React.lazy(() => import('src/pages/map'));

import { IRoute } from 'src/types/route';
import { CPath } from './path';

export const CRouteList: IRoute[] = [
  {
    path: CPath.landing,
    name: 'Chỉ số môi trường',
    component: landingPage,
    layout: DefaultLayout,
  },
  {
    path: CPath.home,
    name: 'Chỉ số môi trường',
    component: Home,
    layout: AdminLayout,
  },
  {
    path: CPath.gameList,
    name: 'Dữ liệu môi trường',
    component: gameList,
    layout: AdminLayout,
  },
  {
    path: CPath.gameDetails,
    name: 'Bản đồ',
    component: gameDetails,
    layout: AdminLayout,
  },
  {
    path: CPath.posts,
    name: 'Bản đồ',
    component: posts,
    layout: DefaultLayout,
  },
  {
    path: CPath.newPosts,
    name: 'Bản đồ',
    component: newPosts,
    layout: DefaultLayout,
  },
  {
    path: CPath.postsDetails,
    name: 'Bản đồ',
    component: postsDetails,
    layout: AdminLayout,
  },
  {
    path: CPath.profile,
    name: 'Bản đồ',
    component: profile,
    layout: AdminLayout,
  },
  {
    path: CPath.bundles,
    name: 'Bản đồ',
    component: bundles,
    layout: AdminLayout,
  },
  {
    path: CPath.notFound,
    name: 'Không tìm thấy trang',
    component: NotFound,
  },
];
