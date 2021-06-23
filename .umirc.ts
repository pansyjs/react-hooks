import { join } from 'path';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210623172110.svg';

export default {
  mode: 'site',
  title: 'phooks',
  dynamicImport: {},
  favicon: logo,
  logo,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/react-hooks',
    },
  ],
  resolve: {
    includes: [
      "docs",
      "src",
    ]
  },
  alias: {
    '@pansy/react-hooks': join(__dirname, 'src'),
  },
  hash: true,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
}
