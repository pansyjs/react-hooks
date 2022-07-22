import { join } from 'path';

const ROOT = join(__dirname, '../../');
export const PATHS = {
  ROOT,
  PACKAGES: join(ROOT, './hooks'),
  EXAMPLES: join(ROOT, './examples'),
  LERNA_CONFIG: join(ROOT, './lerna.json'),
  JEST_TURBO_CONFIG: join(ROOT, './jest.turbo.config.ts'),
} as const;

export const SCRIPTS = {
  BUNDLE_DEPS: 'hooks-scripts bundleDeps',
  DEV: 'pnpm build --watch',
  BUILD: 'pnpm tsc',
  TEST_TURBO: 'hooks-scripts jest-turbo',
} as const;
