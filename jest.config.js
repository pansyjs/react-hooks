/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/hooks/**/test/*.dom.test.[jt]s?(x)'],
    },
    {
      displayName: 'ssr',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/hooks/**/test/*.ssr.test.[jt]s?(x)'],
    },
  ],
  // TODO: testMatch与projects不应同时配置
  testMatch: undefined
};

module.exports = config;
