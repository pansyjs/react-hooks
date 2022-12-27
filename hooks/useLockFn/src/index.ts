import { useRef, useCallback } from 'react';

/**
 * 用于给一个异步函数增加竞态锁，防止并发执行。
 * @param fn
 * @returns
 */
export function useLockFn<P extends any[] = any[], V extends any = any>(
  fn: (...args: P) => Promise<V>
) {
  const lockRef = useRef(false);

  return useCallback(
    async (...args: P) => {
      if (lockRef.current) return;
      lockRef.current = true;

      try {
        const ret = await fn(...args);
        lockRef.current = false;
        return ret;
      } catch (e) {
        lockRef.current = false;
        throw e;
      }
    },
    [fn]
  );
}
