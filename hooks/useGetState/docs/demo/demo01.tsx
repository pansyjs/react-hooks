/**
 * title: 基本示例
 * description: 打开控制台，计数器每 3 秒打印一次值
 */
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useGetState } from '@pansy/react-hooks';

export default () => {
  const [count, setCount, getCount] = useGetState<number>(0);

  useEffect(
    () => {
      const interval = setInterval(() => {
        console.info(`count: ${count}`);
        console.info(`interval count: ${getCount()}`);
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    },
    []
  );

  return <Button onClick={() => setCount((count) => count + 1)}>count: {count}</Button>;
};
