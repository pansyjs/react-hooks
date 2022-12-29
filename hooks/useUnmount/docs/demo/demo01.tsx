/**
 * title: 基础用法
 * description: 在组件卸载时，执行函数。
 */
import React from 'react';
import { useBoolean, useUnmount } from '@pansy/react-hooks';
import { message, Button } from 'antd';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <>
      <Button onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </Button>
      {state && <MyComponent />}
    </>
  );
};
