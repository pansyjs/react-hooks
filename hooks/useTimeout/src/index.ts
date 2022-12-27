import { useEffect, useRef, useCallback } from 'react';
import { isNumber } from '@pansy/shared'
import { useLatest } from '@pansy/use-latest';

/**
 * 处理 setTimeout 计时器函数的 Hook。
 * @param fn 待执行函数
 * @param delay 定时时间（单位为毫秒）
 */
export function useTimeout(
  fn: () => void,
  delay: number | undefined
) {
  const fnRef = useLatest(fn);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => {
      if (!isNumber(delay) || delay < 0) {
        return;
      }

      timerRef.current = setTimeout(() => {
        fnRef.current();
      }, delay);

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    },
    [delay]
  )

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  return clear;
}
