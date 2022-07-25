/**
 * title: 基础用法
 * desc: 点击按钮查看效果。
 */
import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import { useEventListener } from '@pansy/react-hooks';

export default () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEventListener(
    'click',
    () => {
      setValue(value + 1);
    },
    { target: ref },
  );

  return (
    <Button ref={ref}>
      You click {value} times
    </Button>
  );
};
