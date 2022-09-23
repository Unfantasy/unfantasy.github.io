import { IRoute } from 'umi';

const routes: IRoute[] = [
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
  {
    title: '面部识别',
    path: '/facial-analysis',
    component: './facial-analysis',
  },
  {
    title: '图片压缩',
    path: '/img-compression',
    component: './img-compression',
  },
];

export default routes;
