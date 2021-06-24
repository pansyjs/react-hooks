import { useState } from 'react';
import { useBoolean } from '../useBoolean';

export function useModal<T = undefined>() {
  const [visible, { toggle }] = useBoolean();
  const [initialValue, setInitialValue] = useState<T>();

  const open = (initValue?: T) => {
    toggle(true);
    setInitialValue(initValue);
  };

  const close = () => {
    toggle(false);
    setInitialValue(undefined);
  };

  return {
    visible,
    initialValue,
    open,
    close,
  };

}

export default useModal;
