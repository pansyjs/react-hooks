/**
 * title: 基础用法
 * desc: 默认为 boolean 切换，基础用法与 useBoolean 一致。
 */
import React from 'react';
import { Button } from 'antd';
import { useToggle } from '@pansy/react-hooks';

export default () => {
  const [state, { toggle }] = useToggle();

  return (
    <div>
      <p>状态值: {`${state}`}</p>
      <p>
        <Button onClick={() => toggle()}>
          Toggle
        </Button>
        <Button onClick={() => toggle(false)} style={{ margin: '0 8px' }}>
          Toggle False
        </Button>
        <Button onClick={() => toggle(true)}>
          Toggle True
        </Button>
      </p>
    </div>
  );
};
