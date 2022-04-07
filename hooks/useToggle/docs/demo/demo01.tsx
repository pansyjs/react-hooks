/**
 * title: 基础用法
 * desc: 默认为 boolean 切换，基础用法与 useBoolean 一致。
 */
import React from 'react';
import { Button, Space } from 'antd';
import { useToggle } from '@pansy/react-hooks';

export default () => {
  const [state, { set, toggle }] = useToggle();

  return (
    <div>
      <p>状态值: {`${state}`}</p>
      <Space>
        <Button onClick={() => toggle()}>
          Toggle
        </Button>
        <Button onClick={() => set(false)}>
          Toggle False
        </Button>
        <Button onClick={() => set(true)}>
          Toggle True
        </Button>
      </Space>
    </div>
  );
};
