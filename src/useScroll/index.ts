import { useLatest } from '../useLatest';
import { useRafState } from '../useRafState';
import { getTargetElement } from '../utils/domTarget';
import { useEffectWithTarget } from '../utils/useEffectWithTarget';

import type { BasicTarget } from '../utils/domTarget';

export interface Position { left: number; top: number };

export type Target = BasicTarget<Element | Document>;
export type ScrollListenController = (val: Position) => boolean;

/**
 * 监听元素的滚动位置
 * @param target
 * @param shouldUpdate
 * @returns
 */
export function useScroll(
  target: Target,
  shouldUpdate: ScrollListenController = () => true,
) {
  const [position, setPosition] = useRafState<Position>();

  const shouldUpdateRef = useLatest(shouldUpdate);

  useEffectWithTarget(
    () => {
      const el = getTargetElement(target, document);

      if (!el) return;

      const updatePosition = () => {
        let newPosition: Position;

        if (el === document) {
          if (document.scrollingElement) {
            newPosition = {
              left: document.scrollingElement.scrollLeft,
              top: document.scrollingElement.scrollTop,
            };
          } else {
            newPosition = {
              left: Math.max(
                window.pageYOffset,
                document.documentElement.scrollTop,
                document.body.scrollTop,
              ),
              top: Math.max(
                window.pageXOffset,
                document.documentElement.scrollLeft,
                document.body.scrollLeft,
              ),
            };
          }
        } else {
          newPosition = {
            left: (el as Element).scrollLeft,
            top: (el as Element).scrollTop,
          };
        }

        if (shouldUpdateRef.current(newPosition)) {
          setPosition(newPosition);
        }
      }

      updatePosition();

      el.addEventListener('scroll', updatePosition);

      return () => {
        el.removeEventListener('scroll', updatePosition);
      };
    },
    [],
    target,
  );

  return position;
}
