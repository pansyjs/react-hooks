import { useLatest } from '@pansy/use-latest';
import { isArray } from '@pansy/shared'
import { getTargetElement } from '@pansy/shared/react';
import { useEffectWithTarget, getDocumentOrShadow } from '@pansy/hook-utils';

import type { BasicTarget } from '@pansy/shared/react';

/**
 * 监听目标元素外的点击事件
 * @param onClickAway
 * @param target
 * @param eventName
 */
export function useClickAway<T extends Event = Event>(
  onClickAway: (event: T) => void,
  target: BasicTarget | BasicTarget[],
  eventName: string | string[] = 'click',
) {
  const onClickAwayRef = useLatest(onClickAway);

  useEffectWithTarget(
    () => {
      const handler = (event: any) => {
        const targets = isArray(target) ? target : [target];

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

      const documentOrShadow = getDocumentOrShadow(target);
      const eventNames = isArray(eventName) ? eventName : [eventName];

      eventNames.forEach((event) => documentOrShadow.addEventListener(event, handler));

      return () => {
        eventNames.forEach((event) => documentOrShadow.removeEventListener(event, handler));
      };
    },
    isArray(eventName) ? eventName : [eventName],
    target,
  );
}
