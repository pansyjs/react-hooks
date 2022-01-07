import { useCallback, useState } from 'react';
import { useLatest } from '@pansy/use-latest';

interface EventTarget<U> {
  target: {
    value: U;
  };
}

export interface Options<T, U> {
  initialValue?: T;
  transformer?: (value: U) => T;
}

export function useEventTarget<T, U = T>(options?: Options<T, U>) {
  const { initialValue, transformer } = options || {};
  const [value, setValue] = useState(initialValue);

  const transformerRef = useLatest(transformer);

  const reset = useCallback(() => setValue(initialValue), []);

  const onChange = useCallback((e: EventTarget<U>) => {
    const _value = e.target.value;
    if (typeof transformerRef.current === 'function') {
      return setValue(transformerRef.current(_value));
    }
    // no transformer => U and T should be the same
    return setValue(_value as unknown as T);
  }, []);

  return [
    value,
    {
      onChange,
      reset,
    },
  ] as const;
}
