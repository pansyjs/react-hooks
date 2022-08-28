import { useRef } from 'react';
import isEqual from 'lodash/isEqual';
import { useEffectWithTarget } from './useEffectWithTarget';

import type { DependencyList, EffectCallback } from 'react';
import type { BasicTarget } from '@pansy/shared/react';

const depsEqual = (aDeps: DependencyList, bDeps: DependencyList = []) => {
  return isEqual(aDeps, bDeps);
};

export const useDeepCompareEffectWithTarget = (
  effect: EffectCallback,
  deps: DependencyList,
  target: BasicTarget<any> | BasicTarget<any>[],
) => {
  const ref = useRef<DependencyList>();
  const signalRef = useRef<number>(0);

  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }

  useEffectWithTarget(effect, [signalRef.current], target);
}

