import { useCallback, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useUnmount } from '@pansy/use-unmount';

export function useRafState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
export function useRafState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

/**
 * 只在 requestAnimationFrame callback 时更新 state
 * @param initialState
 * @returns
 */
export function useRafState<S>(initialState?: S | (() => S)) {
  const ref = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback(
    (value: S | ((prevState: S) => S)) => {
      cancelAnimationFrame(ref.current);

      ref.current = requestAnimationFrame(() => {
        setState(value);
      });
    },
    []
  );

  useUnmount(() => {
    cancelAnimationFrame(ref.current);
  });

  return [state, setRafState] as const;
}
