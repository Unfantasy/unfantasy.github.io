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
      {
        title: '隐藏的秘密',
        path: '/zero-width-text/secret',
        component: './zero-width-text/Secret',
      },
    ],
  },
];

export default routes;
