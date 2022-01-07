import { useEffect, useRef } from 'react';
import { useUnmount } from '@pansy/use-unmount';
import { isBrowser } from '@pansy/hook-utils';

export interface Options {
  /** 组件卸载时，是否恢复上一个页面标题 */
  restoreOnUnmount?: boolean;
}

const DEFAULT_OPTIONS: Options = {
  restoreOnUnmount: false,
};

/**
 * 用于设置页面标题
 * @param title
 * @param options
 */
export function useTitle(title: string, options: Options = DEFAULT_OPTIONS) {
  const titleRef = useRef(isBrowser ? document.title : '');

  useEffect(() => {
    document.title = title;
  }, [title]);

  useUnmount(() => {
    if (options.restoreOnUnmount) {
      document.title = titleRef.current;
    }
  });
}
