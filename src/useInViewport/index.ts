import 'intersection-observer';
import { useState } from 'react';
import { getTargetElement } from '../utils/domTarget';
import { useEffectWithTarget } from '../utils/useEffectWithTarget';

import type { BasicTarget } from '../utils/domTarget';

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
            if (entry.isIntersecting) {
              setState(true);
            } else {
              setState(false);
            }
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
    [],
    target,
  );

  return [state, ratio] as const;
}
