import { useState, useMemo } from 'react';
import { Actions, State } from './types';

function useToggle<T = boolean | undefined>(): [boolean, Actions<T>];

function useToggle<T = State>(defaultValue: T): [T, Actions<T>];

function useToggle<T = State, U = State>(
  defaultValue: T,
  reverseValue: U,
): [T | U, Actions<T | U>];

/**
 * 用于在两个状态值间切换的 Hook
 * @param defaultValue 默认的状态值
 * @param reverseValue 取反的状态值
 * @returns
 */
function useToggle<D extends State = State, R extends State = State>(
  defaultValue: D = false as D,
  reverseValue?: R,
) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(
    () => {
      // 取反的状态值
      const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

      const toggle = (value?: D | R) => {
        if (value !== undefined) {
          setState(value);
          return;
        }
        setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
      };
      // 设置默认状态值
      const setLeft = () => setState(defaultValue);
      // 设置取反状态值
      const setRight = () => setState(reverseValueOrigin);

      return {
        toggle,
        setLeft,
        setRight,
      };
    },
    [defaultValue, reverseValue]
  );

  return [state, actions];
}

export { useToggle };
export default useToggle;
