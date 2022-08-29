import { useEffect, useLayoutEffect, useRef } from 'react';
import { useUnmount } from '@pansy/use-unmount';
import { getTargetElement, depsAreSame } from '@pansy/shared/react';

import type { DependencyList, EffectCallback } from 'react';
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

    useEffectType(
      () => {
        const targets = Array.isArray(target) ? target : [target];

        const els = targets.map((item) => getTargetElement(item));

        if (!hasInitRef.current) {
          hasInitRef.current = true;
          lastElementRef.current = els;
          lastDepsRef.current = deps;

          unLoadRef.current = effect();
        }

        if (
          els.length !== lastElementRef.current.length ||
          !depsAreSame(els, lastElementRef.current) ||
          !depsAreSame(deps, lastDepsRef.current)
        ) {
          unLoadRef.current?.();

          lastElementRef.current = els;
          lastDepsRef.current = deps;
          unLoadRef.current = effect();
        }
      }
    );

    useUnmount(() => {
      unLoadRef.current?.();
      hasInitRef.current = false;
    });
  }

  return useEffectWithTarget;
}

export const useEffectWithTarget = createEffectWithTarget(useEffect);

export const useLayoutEffectWithTarget = createEffectWithTarget(useLayoutEffect);
