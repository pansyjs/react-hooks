import { useCallback, useState } from 'react';

/**
 * useUpdate 会返回一个函数，调用该函数会强制组件重新渲染
 * @returns
 */
export const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};
