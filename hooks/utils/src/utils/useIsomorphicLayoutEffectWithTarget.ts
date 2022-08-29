import { isBrowser } from '@pansy/shared';
import { useEffectWithTarget, useLayoutEffectWithTarget } from './useEffectWithTarget';

export const useIsomorphicLayoutEffectWithTarget = isBrowser
  ? useLayoutEffectWithTarget
  : useEffectWithTarget;
