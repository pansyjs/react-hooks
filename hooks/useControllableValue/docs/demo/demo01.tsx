/**
 * title: 非受控组件
 * description: 如果 props 中没有 value，则组件内部自己管理 state
 */
import React from 'react';
import { Input, Button } from 'antd';
import { useControllableValue } from '@pansy/react-hooks';

export default (props: any) => {
  const [state, setState] = useControllableValue<string>(props, {
    defaultValue: '',
  });

  return (
    <>
      <Input value={state} placeholder="请输入" onChange={(e) => setState(e.target.value)} style={{ width: 300 }} />
      <Button onClick={() => setState('')} style={{ marginLeft: 8 }}>
        Clear
      </Button>
    </>
  );
};
