import { join } from 'path';

export default {
  mode: 'site',
  title: 'phooks',
  dynamicImport: {},
  favicon: '/logo.svg',
  logo: '/logo.svg',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/react-hooks',
    },
  ],
  resolve: {
    includes: [
      'docs',
      'src'
    ]
  },
  alias: {
    '@pansy/react-hooks': join(__dirname, 'src'),
  },
}
