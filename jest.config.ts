import { createConfig, type Config } from '@umijs/test';

const defaultConfig = createConfig({
  target: 'browser',
});

const config: Config.InitialOptions = {
  ...defaultConfig,
};

export default config;
