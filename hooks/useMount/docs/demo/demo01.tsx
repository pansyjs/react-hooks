import React from 'react';
import { message, Button } from 'antd';
import { useMount, useBoolean } from '@pansy/react-hooks';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useBoolean(false);

  return (
    <>
      <Button onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </Button>
      {state && <MyComponent />}
    </>
  );
};
