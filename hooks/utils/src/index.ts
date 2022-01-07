export { createUpdateEffect } from '@pansy/use-update-effect';
export { createUseStorageState } from './utils/createUseStorageState';
export { depsAreSame } from './utils/depsAreSame';
export { getTargetElement } from './utils/domTarget';
export { isBrowser } from './utils/isBrowser';
export {
  createEffectWithTarget,
  useEffectWithTarget,
  useLayoutEffectWithTarget
} from './utils/useEffectWithTarget';
export { useIsomorphicLayoutEffectWithTarget } from './utils/useIsomorphicLayoutEffectWithTarget';

export type { BasicTarget } from './utils/domTarget';
export type { OptionsWithDefaultValue, Options } from './utils/createUseStorageState'
