import { useLatest } from '../useLatest';
import { getTargetElement } from '../utils/domTarget';
import { useEffectWithTarget } from '../utils/useEffectWithTarget';

import type { BasicTarget } from '../utils/domTarget';

/**
 * 监听目标元素外的点击事件
 * @param onClickAway
 * @param target
 * @param eventName
 */
export function useClickAway<T extends Event = Event>(
  onClickAway: (event: T) => void,
  target: BasicTarget | BasicTarget[],
  eventName = 'click',
) {
  const onClickAwayRef = useLatest(onClickAway);

  useEffectWithTarget(
    () => {
      const handler = (event: any) => {
        const targets = Array.isArray(target) ? target : [target];

        if (
          targets.some((item) => {
            const targetElement = getTargetElement(item);
            return !targetElement || targetElement?.contains(event.target);
          })
        ) {
          return;
        }
        onClickAwayRef.current(event);
      };

      document.addEventListener(eventName, handler);

      return () => {
        document.removeEventListener(eventName, handler);
      };
    },
    [eventName],
    target,
  );
}
