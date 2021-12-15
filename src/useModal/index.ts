import { useState } from 'react';
import { useBoolean } from '../useBoolean';

export interface UseModalResult<T = undefined> {
  /** 弹层的开关状态 */
  visible: boolean;
  /** 需要传入的数据 */
  data?: T;
  /** 关闭弹层 */
  open: (value?: T) => void;
  /** 开启弹层 */
  close: () => void;
}

/**
 * 优雅的使用 Modal、Drawer 等类弹层的 Hook
 * @param value 需要初始化的状态值
 * @returns
 */
export function useModal<T = undefined>(
  initVisible?: boolean,
  initData?: T
): UseModalResult<T> {
  const [visible, { set }] = useBoolean(initVisible);
  const [data, setData] = useState<T | undefined>(initData);

  const open = (value?: T) => {
    set(true);
    setData(value as T);
  };

  const close = () => {
    set(false);
    setData(undefined as unknown as T);
  };

  return {
    visible,
    data,
    open,
    close,
  };
}

export default useModal;
