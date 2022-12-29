/**
 * title: 支持 shadow DOM
 * description: 将 addEventListener 添加到 shadow DOM root
 */
import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import { useClickAway } from '@pansy/react-hooks';
import shadow from 'react-shadow';

export default () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  useClickAway(
    () => {
      setCounter((s) => s + 1);
    },
    ref,
    ['click', 'contextmenu'],
  );

  return (
    <shadow.div>
      <div>
        <Button ref={ref}>
          box
        </Button>
        <p>counter: {counter}</p>
      </div>
    </shadow.div>
  );
};
