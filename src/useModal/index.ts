import { useState } from 'react';
import { useBoolean } from '../useBoolean';

export function useModal<T = undefined>() {
  const [visible, { toggle }] = useBoolean();
  const [initValue, setInitValue] = useState<T>();

  const open = (initValue?: T) => {
    toggle(true);
    setInitValue(initValue);
  };

  const close = () => {
    toggle(false);
    setInitValue(undefined);
  };

  return {
    initValue,
    visible,
    open,
    close,
  };

}

export default useModal;
