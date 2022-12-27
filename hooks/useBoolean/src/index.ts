import { useMemo } from 'react';
import { useToggle } from '@pansy/use-toggle';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

/**
 * 优雅的管理 boolean 状态的 Hook
 * @param defaultValue 默认的状态值
 * @returns
 */
export function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle, set }] = useToggle(defaultValue);

  const actions: Actions = useMemo(
    () => {
      const setTrue = () => set(true);
      const setFalse = () => set(false);

      return {
        toggle,
        set: (v) => set(!!v),
        setTrue,
        setFalse,
      };
    },
    []
  );

  return [state, actions];
};
