import { useState } from 'react';
import { useBoolean } from '@pansy/use-boolean';
import { useMemoizedFn } from '@pansy/use-memoized-fn';

export interface UseModalResult<T = undefined> {
  /** 开关状态 */
  visible: boolean;
  /** 需要传入的数据 */
  data?: T;
  /** 关闭弹层 */
  open: (value?: T) => void;
  /** 开启弹层 */
  close: () => void;
}

/**
 * 优雅的使用 Modal、Drawer 弹层类组件的 Hook
 * @param defaultVisible 默认的开关状态
 * @param defaultData 默认的数据
 * @returns
 */
export function useModal<T = undefined>(
  defaultVisible?: boolean,
  defaultData?: T
): UseModalResult<T> {
  const [visible, { set }] = useBoolean(defaultVisible);
  const [data, setData] = useState<T>(defaultData);

  const open = (value?: T) => {
    set(true);
    setData(value);
  };

  const close = () => {
    set(false);
    setData(undefined);
  };

  return {
    visible,
    data,
    open: useMemoizedFn(open),
    close: useMemoizedFn(close),
  };
}

export default useModal;
