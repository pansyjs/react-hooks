import { useState, useMemo } from 'react';

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  toggle: () => void;
  set: (value: T) => void;
}

export function useToggle<T = boolean>(): [boolean, Actions<T>];

export function useToggle<T>(defaultValue: T): [T, Actions<T>];

export function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

/**
 * 用于在两个状态值间切换的 Hook
 * @param defaultValue 默认的状态值
 * @param reverseValue 取反的状态值
 * @returns
 */
export function useToggle<D, R>(
  defaultValue: D = false as unknown as D,
  reverseValue?: R
) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(
    () => {
      // 取反的状态值
      const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

      const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
      const set = (value: D | R) => setState(value);
      // 设置默认状态值
      const setLeft = () => setState(defaultValue);
      // 设置取反状态值
      const setRight = () => setState(reverseValueOrigin);

      return {
        toggle,
        set,
        setLeft,
        setRight,
      };
    },
    []
  );

  return [state, actions];
}
