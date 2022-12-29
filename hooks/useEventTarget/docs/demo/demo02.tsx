/**
 * title: 自定义转换函数
 * description: 只能输入数字的 input 组件
 */
import React from 'react';
import { Button, Input } from 'antd';
import { useEventTarget } from '@pansy/react-hooks';

export default () => {
  const [value, { onChange, reset }] = useEventTarget({
    transformer: (val: string) => val.replace(/[^\d]/g, ''),
  });

  return (
    <>
      <Input
        value={value}
        onChange={onChange}
        style={{ width: 200, marginRight: 20 }}
        placeholder="Please type here"
      />
      <Button onClick={reset}>
        reset
      </Button>
    </>
  );
};
