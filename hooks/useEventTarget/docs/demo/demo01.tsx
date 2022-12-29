/**
 * title: 基础用法
 * description: 受控的 input，支持 reset。
 */
import React from 'react';
import { Button, Input } from 'antd';
import { useEventTarget } from '@pansy/react-hooks';

export default () => {
  const [value, { reset, onChange }] = useEventTarget({ initialValue: 'this is initial value' });

  return (
    <div>
      <Input value={value} onChange={onChange} style={{ width: 200, marginRight: 20 }} />
      <Button onClick={reset}>
        reset
      </Button>
    </div>
  );
};
