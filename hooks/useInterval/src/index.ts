import { useCallback, useEffect, useRef } from 'react';
import { useLatest } from '@pansy/use-latest';
import { isNumber } from '@pansy/shared'

/**
 * 处理 setInterval 的 Hook。
 * @param fn 要定时调用的函数
 * @param delay 定时时间（单位为毫秒），当取值 undefined 时会停止计时器
 * @param options.immediate 是否在首次渲染时立即执行
 */
export function useInterval(
  fn: () => void,
  delay?: number,
  options: {
    immediate?: boolean;
  } = {},
) {
  const { immediate } = options;

  const fnRef = useLatest(fn);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(
    () => {
      if (!isNumber(delay) || delay < 0) {
        return;
      }

      if (immediate) {
        fnRef.current();
      }

      timerRef.current = setInterval(() => {
        fnRef.current();
      }, delay);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    },
    [delay]
  )

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  return clear;
}
