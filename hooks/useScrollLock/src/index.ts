import { useMemo, useEffect } from 'react';
import { getTargetElement } from '@pansy/hook-utils';
import { useGetState } from '@pansy/use-get-state';
import { useEventListener } from '@pansy/use-event-listener';
import { isIOS } from '@pansy/shared';

import type { CSSProperties } from 'react';
import type { BasicTarget } from '@pansy/hook-utils';

export function useScrollLock(
  target: BasicTarget,
  initialState = false,
) {
  const [isLocked, setIsLocked, getIsLocked] = useGetState<boolean>(initialState);
  let initialOverflow: CSSProperties['overflow'];

  useEffect(() => {
    const ele = getTargetElement(target) as HTMLElement;
    if (ele) {
      initialOverflow = ele.style.overflow
      if (getIsLocked())
        ele.style.overflow = 'hidden'
      }
  }, [])

  useEventListener('touchmove', preventDefault, {
    target,
    passive: false,
  })

  const lock = () => {
    const ele = getTargetElement(target) as HTMLElement;
    if (!ele || getIsLocked())
    return
    ele.style.overflow = 'hidden'
    setIsLocked(true)
  }

  const unlock = () => {
    const ele = getTargetElement(target) as HTMLElement;
    if (!ele || !getIsLocked())
      return
    ele.style.overflow = initialOverflow
    setIsLocked(false)
  }

  function preventDefault(rawEvent: TouchEvent) {
    if (!getIsLocked() || !isIOS) return true;
    const e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    // @ts-ignore
    if (e.touches.length > 1)
      return true

    if (e.preventDefault)
      e.preventDefault()

    return false
  }

  const actions = useMemo(
    () => {
      const get = () => { return getIsLocked() };
      const set = (v: boolean) => {
        if (v)
          lock()
        else unlock()
      }
      const toggle = () => { set(!get()); }

      return {
        toggle,
        get,
        set,
      };
    },
    []
  );

  return [isLocked, actions];
}
