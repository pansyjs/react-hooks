import { isBrowser } from './isBrowser';
import { useEffectWithTarget, useLayoutEffectWithTarget } from './useEffectWithTarget';

export const useIsomorphicLayoutEffectWithTarget = isBrowser
  ? useLayoutEffectWithTarget
  : useEffectWithTarget;
