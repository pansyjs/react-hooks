import React, { useState } from 'react';
import { Space, Button } from 'antd';
import { useInterval } from '@pansy/react-hooks';

export default () => {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState<number | undefined>(1000);

  useInterval(
    () => {
      setCount(count + 1);
    },
    interval
  );

  return (
    <div>
      <p> count: {count} </p>
      <p style={{ marginTop: 16 }}> interval: {interval} </p>
      <Space>
        <Button
          onClick={() => setInterval((t) => (t ? t + 1000 : 1000))}
          style={{ marginRight: 8 }}
        >
          interval + 1000
        </Button>

        <Button
          onClick={() => {
            setInterval(1000);
          }}
        >
          reset interval
        </Button>

        <Button
          onClick={() => {
            setInterval(undefined);
          }}
        >
          clear
        </Button>
      </Space>
    </div>
  )
}
