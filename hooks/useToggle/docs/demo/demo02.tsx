/**
 * title: 在任意两个值之间切换
 * description: 接受两个参数，在参数间进行切换。
 */
import React from 'react';
import { Button, Space } from 'antd';
import { useToggle } from '@pansy/react-hooks';

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');

  return (
    <div>
      <p>状态值: {state}</p>
      <Space>
        <Button onClick={toggle}>
          Toggle
        </Button>
        <Button onClick={() => set('Hello')}>
          Toggle Hello
        </Button>
        <Button onClick={() => set('World')}>
          Toggle World
        </Button>
        <Button onClick={setLeft}>
          Set Hello
        </Button>
        <Button onClick={setRight}>
          Set World
        </Button>
      </Space>
    </div>
  );
};
