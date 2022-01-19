/**
 * title: 支持多个 DOM 对象
 * desc: 支持传入多个目标对象。
 */
import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import { useClickAway } from '@pansy/react-hooks';

export default () => {
  const [counter, setCounter] = useState(0);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useClickAway(() => {
    setCounter((s) => s + 1);
  }, [ref1, ref2]);

  return (
    <div>
      <Button ref={ref1}>
        box1
      </Button>
      <Button ref={ref2} style={{ marginLeft: 16 }}>
        box2
      </Button>
      <p>counter: {counter}</p>
    </div>
  );
};
