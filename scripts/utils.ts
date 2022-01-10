import path from 'path';
import { fsExtra } from '@walrus/cli-utils';

/**
 * 获取所有的包
 * @param opts
 * @returns
 */
export function getPkgs(opts?: { base?: string }): string[] {
  const base = opts?.base || path.join(__dirname, '../hooks');
  return fsExtra.readdirSync(base).filter((dir) => {
    return !dir.startsWith('.') && fsExtra.existsSync(path.join(base, dir, 'package.json'));
  });
}
