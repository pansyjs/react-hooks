import { useLatest } from '@pansy/use-latest';
import { useDeepCompareEffectWithTarget, getTargetElement } from '@pansy/hook-utils';

import { genKeyFormater } from './utils';

import type { KeyFilter, EventHandler, Options, KeyEvent, KeyPredicate } from './types';

const defaultEvents: KeyEvent[] = ['keydown'];

export function useKeyPress(
  keyFilter: KeyFilter,
  eventHandler: EventHandler,
  option: Options = {}
) {
  const { events = defaultEvents, target, exactMatch = false } = option;

  const eventHandlerRef = useLatest(eventHandler);
  const keyFilterRef = useLatest(keyFilter);

  useDeepCompareEffectWithTarget(
    () => {
      const el = getTargetElement(target, window);

      if (!el) {
        return;
      }

      const callbackHandler = (event: KeyboardEvent) => {
        const genGuard: KeyPredicate = genKeyFormater(keyFilterRef.current, exactMatch);
        if (genGuard(event)) {
          return eventHandlerRef.current?.(event);
        }
      };

      for (const eventName of events) {
        el?.addEventListener?.(eventName, callbackHandler);
      }

      return () => {
        for (const eventName of events) {
          el?.removeEventListener?.(eventName, callbackHandler);
        }
      };
    },
    [events],
    target
  );
}

export default useKeyPress;
