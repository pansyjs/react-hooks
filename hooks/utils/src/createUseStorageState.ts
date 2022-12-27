import { useState } from 'react';
import { isFunction } from '@pansy/shared';
import { useMemoizedFn } from '@pansy/use-memoized-fn';
import { useUpdateEffect } from '@pansy/use-update-effect';

export interface Options<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

export interface OptionsWithDefaultValue<T> extends Options<T> {
  defaultValue: T | FuncUpdater<T>;
}

export type FuncUpdater<T> = (previousState?: T) => T;

export type StorageStateResult<T> = [T | undefined, (value?: T | FuncUpdater<T>) => void];
export type StorageStateResultHasDefaultValue<T> = [T, (value?: T | FuncUpdater<T>) => void];

export function createUseStorageState(getStorage: () => Storage | undefined) {
  function useStorageState<T = any>(key: string, options?: Options<T>): StorageStateResult<T>;

  function useStorageState<T>(
    key: string,
    options: OptionsWithDefaultValue<T>,
  ): StorageStateResultHasDefaultValue<T>;

  function useStorageState<T>(key: string, options?: Options<T> & OptionsWithDefaultValue<T>) {
    let storage: Storage | undefined;

    try {
      storage = getStorage();
    } catch (err) {
      console.error(err);
    }

    const serializer = (value: T) => {
      if (options?.serializer) {
        return options?.serializer(value);
      }
      return JSON.stringify(value);
    };

    const deserializer = (value: string) => {
      if (options?.deserializer) {
        return options?.deserializer(value);
      }
      return JSON.parse(value);
    };

    function getStoredValue() {
      try {
        const raw = storage?.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        console.error(e);
      }
      if (isFunction<FuncUpdater<T>>(options?.defaultValue)) {
        return options?.defaultValue();
      }
      return options?.defaultValue;
    }

    const [state, setState] = useState<T | undefined>(() => getStoredValue());

    useUpdateEffect(() => {
      setState(getStoredValue());
    }, [key]);

    const updateState = (value?: T | FuncUpdater<T>) => {
      if (typeof value === 'undefined') {
        setState(undefined);
        storage?.removeItem(key);
      } else if (isFunction<FuncUpdater<T>>(value)) {
        const currentState = value(state);
        try {
          setState(currentState);
          storage?.setItem(key, serializer(currentState));
        } catch (e) {
          console.error(e);
        }
      } else {
        try {
          setState(value);
          storage?.setItem(key, serializer(value));
        } catch (e) {
          console.error(e);
        }
      }
    };

    return [state, useMemoizedFn(updateState)];
  }

  return useStorageState;
}
