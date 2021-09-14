import { defineConfig } from 'umi';
import define from './define';
import routes from './routes';

export default defineConfig({
  publicPath: './',
  outputPath: 'site',
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes,
  fastRefresh: {},
  define,
  history: {
    type: 'hash',
  },
  dynamicImport: {},
  mfsu: {},
});
