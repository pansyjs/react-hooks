/**
 * title: 支持传入 DOM
 * desc: 支持直接传入 DOM 对象或 function。
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import { useClickAway } from '@pansy/react-hooks';

export default () => {
  const [counter, setCounter] = useState(0);

  useClickAway(
    () => {
      setCounter((s) => s + 1);
    },
    () => document.getElementById('use-click-away-button'),
  );

  return (
    <>
      <Button id="use-click-away-button">
        box
      </Button>
      <p>counter: {counter}</p>
    </>
  );
};
