import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    // component: '@/layouts/BasicLayout',
    routes: [
      { title: '首页', path: '/', component: './index' },
      {
        title: '零宽字符',
        path: '/zero-width-text',
        component: './zero-width-text',
      },
    ],
  },
];

export default routes;
