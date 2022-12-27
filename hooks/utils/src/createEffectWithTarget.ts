import { useRef } from 'react';
import { isArray } from '@pansy/shared';
import { getTargetElement, depsAreSame } from '@pansy/shared/react';
import { useUnmount } from '@pansy/use-unmount'

import type { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react';
import type { BasicTarget } from '@pansy/shared/react';

export const createEffectWithTarget = (
  useEffectType: typeof useEffect | typeof useLayoutEffect
) => {
  const useEffectWithTarget = (
    effect: EffectCallback,
    deps: DependencyList,
    target: BasicTarget<any> | BasicTarget<any>[],
  ) => {
    const hasInitRef = useRef(false);

    const lastElementRef = useRef<(Element | null)[]>([]);
    const lastDepsRef = useRef<DependencyList>([]);

    const unLoadRef = useRef<any>();

    useEffectType(() => {
      const targets = isArray(target) ? target : [target];
      const eles = targets.map((item) => getTargetElement(item));

      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = eles;
        lastDepsRef.current = deps;

        unLoadRef.current = effect();
        return;
      }

      if (
        eles.length !== lastElementRef.current.length ||
        !depsAreSame(eles, lastElementRef.current) ||
        !depsAreSame(deps, lastDepsRef.current)
      ) {
        unLoadRef.current?.();

        lastElementRef.current = eles;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });

    useUnmount(() => {
      unLoadRef.current?.();
      // for react-refresh
      hasInitRef.current = false;
    });
  }

  return useEffectWithTarget;
}
