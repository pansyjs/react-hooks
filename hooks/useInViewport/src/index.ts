import 'intersection-observer';
import { useState } from 'react';
import { getTargetElement } from '@pansy/shared/react';
import { useEffectWithTarget } from '@pansy/hook-utils';

import type { BasicTarget } from '@pansy/shared/react';

export interface Options {
  rootMargin?: string;
  threshold?: number | number[];
  root?: BasicTarget<Element>;
}

/**
 * 观察元素是否在可见区域，以及元素可见比例。
 * @param target
 * @param options
 * @returns
 */
export function useInViewport(target: BasicTarget, options?: Options) {
  const [state, setState] = useState<boolean>();
  const [ratio, setRatio] = useState<number>();

  useEffectWithTarget(
    () => {
      const el = getTargetElement(target);
      if (!el) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            setRatio(entry.intersectionRatio);
            setState(entry.isIntersecting);
          }
        },
        {
          ...options,
          root: getTargetElement(options?.root),
        },
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    },
    [options?.rootMargin, options?.threshold],
    target,
  );

  return [state, ratio] as const;
}
