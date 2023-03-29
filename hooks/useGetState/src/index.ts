import { useState, useRef, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type GetStateAction<S> = () => S;

function useGetState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, GetStateAction<S>];
function useGetState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  GetStateAction<S | undefined>,
];
function useGetState<S>(initialState?: S) {
  const [state, setState] = useState<S>(initialState);
  const stateRef = useRef<S>(state);
  stateRef.current = state;

  const getState = useCallback<GetStateAction<S>>(() => stateRef.current, []);

  return [state, setState, getState];
}

export { useGetState };
export default useGetState;
