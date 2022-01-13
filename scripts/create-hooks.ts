import { join } from 'path';
import {
  logger,
  isDir,
  lodash,
  prompts,
  fsExtra,
  BaseGenerator,
} from '@walrus/cli-utils';
import { getPkgs } from './utils';

(async () => {
  const { hookName } = await prompts([
    {
      type: 'text',
      name: 'hookName',
      message: '请输入 Hook 名称',
    },
  ]);

  const pkgs = getPkgs();

  if (!hookName) {
    logger.error('请输入 Hook 名称');
    return;
  }

  if (pkgs.includes(hookName)) {
    logger.error('hook 已存在！');
    return;
  }

  const HookPath = join(__dirname, `../hooks/${hookName}`);
  const TemplatePath = join(__dirname, `./template`);

  if (!await isDir(HookPath)) {
    // 创建目录
    fsExtra.mkdirSync(HookPath);
  }

  const pluginPrompts = [
    {
      name: 'description',
      type: 'text',
      message: `描述此Hook的功能`,
    },
  ] as prompts.PromptObject[];

  const generator = new BaseGenerator({
    path: TemplatePath,
    target: HookPath,
    data: {
      name: `@pansy/${lodash.kebabCase(hookName)}`,
      hookName: lodash.camelCase(hookName),
    },
    questions: pluginPrompts,
  });

  await generator.run();
})();
