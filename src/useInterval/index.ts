import { useEffect } from 'react';
import { useLatest } from '../useLatest';

/**
 * 处理 setInterval 的 Hook。
 * @param fn 要定时调用的函数
 * @param delay 定时时间（单位为毫秒），当取值 undefined 时会停止计时器
 * @param options.immediate 是否在首次渲染时立即执行
 */
export function useInterval(
  fn: () => void,
  delay?: number,
  options?: {
    immediate?: boolean;
  },
) {
  const fnRef = useLatest(fn);

  const immediate = options?.immediate;

  useEffect(
    () => {
      if (typeof delay !== 'number' || delay <= 0) return;

      if (immediate) {
        fnRef.current();
      }

      const timer = setInterval(() => {
        fnRef.current();
      }, delay);

      return () => {
        clearInterval(timer);
      };
    },
    [delay]
  )

}
