import { useMemo, useRef } from 'react';
import { isFunction } from '@pansy/shared';
import { useMemoizedFn } from '@pansy/use-memoized-fn';
import { useUpdate } from '@pansy/use-update';

import type { SetStateAction } from 'react';

export type Props = Record<string, any>;

export interface StandardProps<T> {
  value: T;
  defaultValue?: T;
  onChange: (val: T) => void;
}

export interface Options<T> {
  defaultValue?: T;
  defaultValuePropName?: string;
  valuePropName?: string;
  trigger?: string;
}

export function useControllableValue<T = any>(
  props: StandardProps<T>
): [T, (v: SetStateAction<T>) => void];

export function useControllableValue<T = any>(
  props?: Props,
  options?: Options<T>,
): [T, (v: SetStateAction<T>, ...args: any[]) => void];

export function useControllableValue<T = any>(
  props: Props = {},
  options: Options<T> = {}
) {
  const {
    defaultValue,
    defaultValuePropName = 'defaultValue',
    valuePropName = 'value',
    trigger = 'onChange',
  } = options;

  const value = props[valuePropName] as T;
  const isControlled = props.hasOwnProperty(valuePropName);

  const initialValue = useMemo(
    () => {
      if (isControlled) {
        return value;
      }

      if (props.hasOwnProperty(defaultValuePropName)) {
        return props[defaultValuePropName];
      }

      return defaultValue;
    },
    []
  );

  const stateRef = useRef(initialValue);
  if (isControlled) {
    stateRef.current = value;
  }

  const update = useUpdate();

  const setState = (v: SetStateAction<T>, ...args: any[]) => {
    const r = isFunction(v) ? v(stateRef.current) : v;

    if (!isControlled) {
      stateRef.current = r;
      update();
    }

    if (props[trigger]) {
      props[trigger](r, ...args);
    }
  };

  return [stateRef.current, useMemoizedFn(setState)] as const;
}
