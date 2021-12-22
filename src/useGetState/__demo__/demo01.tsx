import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import { useGetState } from '@pansy/react-hooks';

export default () => {
  const [count, setCount, getCount] = useGetState<number>(0);

  useEffect(
    () => {
      const interval = setInterval(() => {
        message.info(`count: ${count}`);
        message.info(`interval count: ${getCount()}`);
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    },
    []
  );

  return <Button onClick={() => setCount((count) => count + 1)}>count: {count}</Button>;
};
