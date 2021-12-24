/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
const isProduction = process.env.REACT_APP_ENV === 'prod';
const suffixSaas = !isProduction ? `${process.env.REACT_APP_ENV}` : ''; // 请求域名后缀
// const isDev = process.env.UMI_ENV === 'dev'; // 是否是本地开发环境

export default {
  'process.env.REACT_APP_ENV': process.env.REACT_APP_ENV,
  'process.env.UMI_ENV': process.env.UMI_ENV,
  'process.env.REACT_APP_BASEURL': `https://saas${suffixSaas}.myweimai.com`,
  'process.env.DOC_BASEURL': !isProduction
    ? `https://${process.env.REACT_APP_ENV}-doc.myweimai.com`
    : 'https://doctor.myweimai.com/',
};
