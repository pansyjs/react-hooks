import { join } from 'path';
import { readdirSync } from 'fs';

const headPkgList = [];
const pkgList = readdirSync(join(__dirname, 'hooks')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const tailPkgList = pkgList
  .map((path) => [join('hooks', path, 'docs')])
  .reduce((acc, val) => acc.concat(val), []);

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210623172110.svg';

export default {
  mode: 'site',
  title: 'Pansy Hooks',
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
      ...tailPkgList,
      'docs'
    ],
  },
  alias: {
    '@pansy/react-hooks': join(__dirname, 'hooks/hooks/src'),
  },
  menus: {
    '/hooks': [
      {
        title: 'Scene',
        children: [
          'useModal.md',
          'useMqtt.md',
          'useSelections.md',
          'useWebSocket.md',
        ],
      },
      {
        title: 'LifeCycle',
        children: [
          'useUnmount.md',
        ],
      },
      {
        title: 'State',
        children: [
          'useBoolean.md',
          'useGetState.md',
          'useUrlState.md',
          'useLocalStorageState.md',
          'useRafState.md',
          'useSessionStorageState.md',
          'useToggle.md',
        ],
      },
      {
        title: 'LifeCycle',
        children: [
          'useUnmount.md',
        ],
      },
      {
        title: 'Effect',
        children: [
          'useInterval.md',
          'useLockFn.md',
          'useTimeout.md',
          'useUpdate.md',
          'useUpdateEffect.md',
          'useUpdateLayoutEffect.md',
        ],
      },
      {
        title: 'Dom',
        children: [
          'useClickAway.md',
          'useDocumentVisibility.md',
          'useEventListener.md',
          'useEventTarget.md',
          'useExternal.md',
          'useFavicon.md',
          'useHover.md',
          'useInViewport.md',
          'useKeyPress.md',
          'useScroll.md',
          'useSize.md',
          'useTitle.md',
          'useWatermark.md',
        ],
      },
      {
        title: 'Advanced',
        children: [
          'useControllableValue.md',
          'useLatest.md',
          'useMemoizedFn.md',
          'usePrevious.md',
        ],
      },
    ]
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
