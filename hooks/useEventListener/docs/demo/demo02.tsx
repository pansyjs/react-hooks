/**
 * title: 监听 keydown 事件
 * desc: 按下键盘查看效果。
 */
import React, { useState } from 'react';
import { useEventListener } from '@pansy/react-hooks';

export default () => {
  const [value, setValue] = useState('');

  useEventListener('keydown', (ev) => {
    setValue(ev.code);
  });

  return <p>Your press key is {value}</p>;
};
