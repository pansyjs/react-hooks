/**
 * title: 基础用法
 * description: 强制组件重新渲染。
 */
import React from 'react';
import { Button } from 'antd';
import { useUpdate } from '@pansy/react-hooks';

export default () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <Button onClick={update} style={{ marginTop: 8 }}>
        update
      </Button>
    </>
  );
};
