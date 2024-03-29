/**
 * title: 基础用法
 * description: 切换 boolean，可以接收默认值。
 */
import React from 'react';
import { Button } from 'antd';
import { useBoolean } from '@pansy/react-hooks';

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

  return (
    <div>
      <p>状态值: {JSON.stringify(state)}</p>
      <p>
        <Button onClick={() => toggle()}>
          Toggle
        </Button>
        <Button onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </Button>
        <Button onClick={setTrue}>
          Set true
        </Button>
      </p>
    </div>
  )
}
