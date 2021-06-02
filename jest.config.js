/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/src/**/__tests__/*.dom.test.[jt]s?(x)'],
    }
  ],
};

module.exports = config;
