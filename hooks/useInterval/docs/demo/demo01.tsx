/**
 * title: 基础用法
 * description: 每 1000ms 执行一次
 */
import React, { useState } from 'react';
import { useInterval } from '@pansy/react-hooks';

export default () => {
  const [state, setState] = useState<number>(0);

  useInterval(
    () => {
      setState(state + 1);
    },
    1000
  );

  return <div>{state}</div>
}
