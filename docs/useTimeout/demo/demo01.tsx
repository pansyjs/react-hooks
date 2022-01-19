/**
 * title: 基础用法
 * desc: 3000ms 后执行一次
 */
import React, { useState } from 'react';
import { useTimeout } from '@pansy/react-hooks';

export default () => {
  const [state, setState] = useState<number>(0);

  useTimeout(
    () => {
      setState(state + 1);
    },
    3 * 1000
  );

  return <div>{state}</div>;
}
