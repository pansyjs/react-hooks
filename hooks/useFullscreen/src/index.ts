import { useLayoutEffect, useRef, } from 'react';
import screenfull from 'screenfull';
import { useBoolean } from '@pansy/use-boolean';
import { getTargetElement } from '@pansy/shared/react';

import type { BasicTarget } from '@pansy/shared/react';

export interface Options {
  onExitFull?: () => void;
  onFull?: () => void;
}

export interface Callback {
  setFull: () => void;
  exitFull: () => void;
  toggleFull: () => void;
}

type Value = boolean;
type Result = [Value, Callback];

export const useFullscreen = (target: BasicTarget, options?: Options): Result => {
  const { onExitFull, onFull } = options || {};

  const onExitFullRef = useRef(onExitFull);
  onExitFullRef.current = onExitFull;

  const onFullRef = useRef(onFull);
  onFullRef.current = onFull;

  const [state, { toggle, setTrue, setFalse, set }] = useBoolean();

  useLayoutEffect(
    () => {
      /* 非全屏时，不需要监听任何全屏事件 */
      if (!state) {
        return;
      }

      const el = getTargetElement(target);
      if (!el) {
        return;
      }

      /* 监听退出 */
      const onChange = () => {
        if (screenfull.isEnabled) {
          const { isFullscreen } = screenfull;
          set(isFullscreen);
        }
      };

      if (screenfull.isEnabled) {
        try {
          screenfull.request(el as HTMLElement);
          setTrue();
          if (onFullRef.current) {
            onFullRef.current();
          }
        } catch (error) {
          setFalse();
          if (onExitFullRef.current) {
            onExitFullRef.current();
          }
        }
        screenfull.on('change', onChange);
      }

      /* state 从 true 变为 false，则关闭全屏 */
      return () => {
        if (screenfull.isEnabled) {
          try {
            screenfull.off('change', onChange);
            screenfull.exit();
          } catch (error) {}
        }
        if (onExitFullRef.current) {
          onExitFullRef.current();
        }
      };
    },
    [state, typeof target === 'function' ? undefined : target]
  );

  const toggleFull = () => toggle();

  return [
    !!state,
    {
      setFull: setTrue,
      exitFull: setFalse,
      toggleFull,
    }
  ];
};

