import { useLatest } from '@pansy/use-latest';
import { useRafState } from '@pansy/use-raf-state';
import { getTargetElement } from '@pansy/shared/react';
import { useEffectWithTarget } from '@pansy/hook-utils';

import type { Position, ScrollListenController, Target } from './types';

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
          setPosition((prev = { top: 0, left: 0 }) => {
            if (newPosition.top > prev.top) {
              newPosition.direction = 'bottom';
            }

            if (newPosition.top < prev.top) {
              newPosition.direction = 'top';
            }

            if (newPosition.left > prev.left) {
              newPosition.direction = 'right';
            }

            if (newPosition.left < prev.left) {
              newPosition.direction = 'left';
            }

            return newPosition
          });
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
