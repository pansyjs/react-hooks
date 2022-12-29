import { defineConfig } from 'dumi';
import { join } from 'path';
import { readdirSync } from 'fs';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210623172110.svg';

const headPkgList: string[] = [];
const pkgList = readdirSync(join(__dirname, 'hooks')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const tailPkgList = pkgList
  .map((path) => [join('hooks', path, 'docs')])
  .reduce((acc, val) => acc.concat(val), []);

export default defineConfig({
  favicons: [logo],
  themeConfig: {
    name: 'PHooks',
    logo,
  },
  resolve: {
    atomDirs: tailPkgList.map((dir) => {
      return {
        type: 'hooks', dir,
      }
    }),
  }
});
