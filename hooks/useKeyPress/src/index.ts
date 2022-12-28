import { useLatest } from '@pansy/use-latest';
import { getTargetElement } from '@pansy/shared/react';
import { useDeepCompareEffectWithTarget } from '@pansy/hook-utils';
import { genKeyFormatter } from './utils';

import type { KeyFilter, EventHandler, Options, KeyEvent, KeyPredicate } from './types';

const defaultEvents: KeyEvent[] = ['keydown'];

export function useKeyPress(
  keyFilter: KeyFilter,
  eventHandler: EventHandler,
  option: Options = {}
) {
  const { events = defaultEvents, target, exactMatch = false, useCapture = false } = option;

  const eventHandlerRef = useLatest(eventHandler);
  const keyFilterRef = useLatest(keyFilter);

  useDeepCompareEffectWithTarget(
    () => {
      const el = getTargetElement(target, window);

      if (!el) {
        return;
      }

      const callbackHandler = (event: KeyboardEvent) => {
        const genGuard: KeyPredicate = genKeyFormatter(keyFilterRef.current, exactMatch);
        if (genGuard(event)) {
          return eventHandlerRef.current?.(event);
        }
      };

      for (const eventName of events) {
        el?.addEventListener?.(eventName, callbackHandler, useCapture);
      }

      return () => {
        for (const eventName of events) {
          el?.removeEventListener?.(eventName, callbackHandler, useCapture);
        }
      };
    },
    [events],
    target
  );
}

export default useKeyPress;
