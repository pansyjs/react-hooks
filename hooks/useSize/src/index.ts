import { ResizeObserver } from '@juggle/resize-observer';
import { useRafState } from '@pansy/use-raf-state';
import { isBrowser } from '@pansy/shared';
import { getTargetElement } from '@pansy/shared/react';
import { useLayoutEffectWithTarget, useEffectWithTarget } from '@pansy/hook-utils';

import type { BasicTarget } from '@pansy/shared/react';

const useIsomorphicLayoutEffectWithTarget = isBrowser
  ? useLayoutEffectWithTarget
  : useEffectWithTarget;

export interface Size {
  width: number;
  height: number;
};

/**
 * 监听 DOM 节点尺寸变化的 Hook
 * @param target
 * @returns
 */
export function useSize(target: BasicTarget): Size | undefined {
  const [state, setState] = useRafState<Size>();

  useIsomorphicLayoutEffectWithTarget(
    () => {
      const el = getTargetElement(target);

      if (!el) return;

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { clientWidth, clientHeight } = entry.target;

          setState({
            width: clientWidth,
            height: clientHeight,
          });
        });
      });

      resizeObserver.observe(el);

      return () => {
        resizeObserver.disconnect();
      };
    },
    [],
    target,
  );

  return state;
}
