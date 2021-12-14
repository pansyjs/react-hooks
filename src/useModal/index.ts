import { useState } from 'react';
import { useBoolean } from '../useBoolean';

export interface UseModalResult<T = undefined> {
  /** 弹层的开关状态 */
  visible: boolean;
  /** 需要传入的状态值 */
  initialValue: T;
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
export function useModal<T = undefined>(value?: T): UseModalResult<T> {
  const [visible, { set }] = useBoolean();
  const [initialValue, setInitialValue] = useState<T>(value as T);

  const open = (value?: T) => {
    set(true);
    setInitialValue(value as T);
  };

  const close = () => {
    set(false);
    setInitialValue(undefined as unknown as T);
  };

  return {
    visible,
    initialValue,
    open,
    close,
  };

}

export default useModal;
