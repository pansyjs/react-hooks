/**
 * title: 基础用法
 * desc: 记录上次的 count 值
 */
import { usePrevious } from '@pansy/react-hooks';
import { Button } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: 8 }}>counter previous value: {previous}</div>
      <Button onClick={() => setCount((c) => c + 1)}>
        increase
      </Button>
      <Button style={{ marginLeft: 8 }} onClick={() => setCount((c) => c - 1)}>
        decrease
      </Button>
    </>
  );
};
