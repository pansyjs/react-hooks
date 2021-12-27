import { useBoolean } from '../useBoolean';
import { useEventListener } from '../useEventListener';
import type { BasicTarget } from '../utils/domTarget';

export interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
}

/**
 * 监听 DOM 元素是否有鼠标悬停
 * @param target
 * @param options
 * @returns
 */
export function useHover(target: BasicTarget, options?: Options) {
  const { onEnter, onLeave } = options || {};

  const [state, { setTrue, setFalse }] = useBoolean(false);

  useEventListener(
    'mouseenter',
    () => {
      onEnter?.();
      setTrue();
    },
    {
      target,
    },
  );

  useEventListener(
    'mouseleave',
    () => {
      onLeave?.();
      setFalse();
    },
    {
      target,
    },
  );

  return state;
};
