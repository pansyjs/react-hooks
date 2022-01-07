import React, { useState, useCallback } from 'react';
import { Button, Space, message } from 'antd';
import { useMemoizedFn } from '@pansy/react-hooks';

export default () => {
  const [count, setCount] = useState(0);

  const callbackFn = useCallback(
    () => {
      message.info(`Current count is ${count}`);
    },
    [count]
  );

  const memoizedFn = useMemoizedFn(() => {
    message.info(`Current count is ${count}`);
  })

  return (
    <>
      <p>count: {count}</p>

      <Space>
        <Button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Add Count
        </Button>

        <Button
          onClick={callbackFn}
        >
          call callbackFn
        </Button>

        <Button
          onClick={memoizedFn}
        >
          call memoizedFn
        </Button>
      </Space>
    </>
  )
}
