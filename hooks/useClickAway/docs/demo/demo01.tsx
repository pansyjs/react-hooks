/**
 * title: 基础用法
 * description: 请点击按钮或按钮外查看效果。
 */
import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import { useClickAway } from '@pansy/react-hooks';

export default () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useClickAway(() => {
    setCounter((s) => s + 1);
  }, ref);

  return (
    <div>
      <Button ref={ref}>
        box
      </Button>
      <p>counter: {counter}</p>
    </div>
  );
};
