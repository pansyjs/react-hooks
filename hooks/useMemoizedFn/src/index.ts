import { useMemo, useRef } from 'react';

type noop = (...args: any[]) => any;

/**
 * 持久化 function 的 Hook
 * @param fn 需要持久化的函数
 * @returns 引用地址永远不会变化的 fn
 */
export function useMemoizedFn<T extends noop>(fn: T) {
  if (process.env.NODE_ENV !== 'development') {
    if (typeof fn !== 'function') {
      console.error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useRef<T>(fn);

  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<T>();

  if (!memoizedFn.current) {
    memoizedFn.current = function(...args) {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      return fnRef.current.apply(this, args);
    } as T
  }

  return memoizedFn.current;
}
