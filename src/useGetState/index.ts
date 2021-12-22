import { useState, useRef, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type GetState<S> = () => S;

/**
 * 给 React.useState 增加了一个 getter 方法，以获取当前最新值
 * @param initialState
 * @returns
 */
export function useGetState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, GetState<S>] {
  const [state, setState] = useState<S>(initialState);

  const stateRef = useRef<S>(state);

  stateRef.current = state;

  const getState = useCallback<GetState<S>>(() => stateRef.current, []);

  return [state, setState, getState];
}
