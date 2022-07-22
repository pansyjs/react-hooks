import path from 'path';
import { logger, readPackage } from '@walrus/cli-utils';
import { Package } from '@walrus/package';
import { getPkgs } from './utils';

const ROOT_DIR = process.cwd();
const HOOKS_DIR = path.join(__dirname, '../hooks');

const rootIgnore = [];

const hooksIgnore = [
  '@pansy/react-hooks',
  '@pansy/hook-utils',
  '@pansy/use-url-state',
];

function syncRootPkg(pkgs: Package[]) {
  const rootPkg = new Package(readPackage(ROOT_DIR).data, ROOT_DIR, ROOT_DIR);

  const devDeps = rootPkg.devDependencies;

  pkgs.forEach(pkg => {
    devDeps[pkg.name] = 'workspace:*';
  });

  rootPkg.set('devDependencies', devDeps);
  rootPkg.serialize();
}

function syncHooksPkg(pkgs: Package[]) {
  const reactHooksDir = path.join(HOOKS_DIR, 'hooks');
  const hooksPkg = new Package(
    readPackage(reactHooksDir).data,
    reactHooksDir,
    ROOT_DIR,
  );

  const deps = hooksPkg.dependencies;

  pkgs.forEach(pkg => {
    deps[pkg.name] = `^${pkg.version}`;
  });

  hooksPkg.set('dependencies', deps);

  hooksPkg.serialize();
}

(async () => {
  logger.info('start');

  const pkgs = getPkgs()
    .map((dir) => {
      const hookDir = path.join(HOOKS_DIR, dir);

      const pkgInfo = readPackage(hookDir);

      return new Package(pkgInfo.data, hookDir, ROOT_DIR)
    })
    .filter(pkg => pkg.name)
    .filter(pkg => pkg.private !== true);

  const rootPkgs = pkgs.filter(pkg => !rootIgnore.includes(pkg.name));

  const hooksPkgs = pkgs.filter(pkg => !hooksIgnore.includes(pkg.name));

  logger.info('sync root package.json');
  syncRootPkg(rootPkgs);

  logger.info('sync @pansy/react-hooks package.json');
  syncHooksPkg(hooksPkgs);

  logger.info('end');
})();
