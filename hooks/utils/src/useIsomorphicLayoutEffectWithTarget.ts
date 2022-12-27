import { isBrowser } from '@pansy/shared';
import { useEffectWithTarget } from './useEffectWithTarget';
import { useLayoutEffectWithTarget } from './useLayoutEffectWithTarget';

export const useIsomorphicLayoutEffectWithTarget = isBrowser
  ? useLayoutEffectWithTarget
  : useEffectWithTarget;
