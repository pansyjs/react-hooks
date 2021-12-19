import { ResizeObserver } from '@juggle/resize-observer';
import { useRafState } from '../useRafState';
import type { BasicTarget } from '../utils/domTarget';
import { getTargetElement } from '../utils/domTarget';
import { useIsomorphicLayoutEffectWithTarget } from '../utils/useIsomorphicLayoutEffectWithTarget';

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
