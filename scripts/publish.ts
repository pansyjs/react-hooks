/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-undef */
import path from 'path';
import { logger, readPackage } from '@walrus/cli-utils';
import 'zx/globals';
import { getPkgs } from './utils';

const HOOKS_DIR = path.join(__dirname, '../hooks');

(async () => {
  logger.info('start');

  const pkgs = getPkgs();

  for (let pkg of pkgs) {
    const pkgPath = path.join(HOOKS_DIR, pkg);
    const {
      data: pkgInfo
    } = await readPackage(pkgPath);

    if (!pkgInfo || !pkgInfo.name || !pkgInfo.version) {
      continue;
    };

    logger.event(`${pkgInfo.name}`);
    await $`cd ${pkgPath}`;

    logger.event('git tag');
    await $`git tag ${pkgInfo.name}@${pkgInfo.version}`;
    await $`git push origin --tags`;

    logger.event('pnpm publish');
    await $`pnpm publish`;
  }
})();
