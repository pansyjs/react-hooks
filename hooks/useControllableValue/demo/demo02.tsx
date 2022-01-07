/**
 * title: 受控组件
 * desc: 如果 props 有 value 字段，则由父级接管控制 state
 */
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useControllableValue } from '@pansy/react-hooks';

const ControllableComponent = (props: any) => {
  const [state, setState] = useControllableValue<string>(props);

  return <Input placeholder="请输入" value={state} onChange={(e) => setState(e.target.value)} style={{ width: 300 }} />;
};

const Parent = () => {
  const [state, setState] = useState<string>('');

  const clear = () => {
    setState('');
  };

  return (
    <>
      <ControllableComponent value={state} onChange={setState} />
      <Button onClick={clear} style={{ marginLeft: 8 }}>
        Clear
      </Button>
    </>
  );
};
export default Parent;
