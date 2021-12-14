import { useEffect } from 'react';
import { useLatest } from '../useLatest';

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

  useEffect(
    () => {
      if (typeof delay !== 'number' || delay <= 0) return;

      const timer = setTimeout(() => {
        fnRef.current();
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    },
    [delay]
  )
}
