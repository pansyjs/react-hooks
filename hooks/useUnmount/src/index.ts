import { useEffect } from 'react';
import { useLatest } from '@pansy/use-latest';

/**
 * 在组件卸载时执行的 Hook
 * @param fn 组件卸载时执行的函数
 */
export function useUnmount(fn: () => void) {
  if (process.env.NODE_ENV === 'development') {
    if (typeof fn !== 'function') {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => {
      return () => {
        fnRef.current();
      }
    },
    []
  )
}
