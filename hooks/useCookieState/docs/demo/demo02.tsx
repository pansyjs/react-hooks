/**
 * title: setState 可以接收函数
 * description: useCookieState 的 setState 可以接收 function updater，就像 useState 那样。
 */
import React from 'react';
import { Button } from 'antd';
import { useCookieState } from '@pansy/react-hooks';

export default () => {
  const [value, setValue] = useCookieState('useCookieStateUpdater', {
    defaultValue: '0',
  });

  return (
    <>
      <p>{value}</p>
      <Button
        style={{ marginRight: '16px' }}
        onClick={() => setValue((v) => String(Number(v) + 1))}
      >
        inc +
      </Button>
      <Button
        style={{ marginRight: '16px' }}
        onClick={() => setValue((v) => String(Number(v) - 1))}
      >
        dec -
      </Button>
      <Button onClick={() => setValue('0')}>
        reset
      </Button>
    </>
  );
}
