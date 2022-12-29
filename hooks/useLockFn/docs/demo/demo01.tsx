/**
 * title: 防止重复提交
 * description: 在 `submit` 函数执行完成前，其余的点击动作都会被忽略。
 */
import React, { useState } from 'react';
import { useLockFn } from '@pansy/react-hooks';
import { message, Button } from 'antd';

function mockApiRequest() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default () => {
  const [count, setCount] = useState(0);

  const submit = useLockFn(async () => {
    message.info('Start to submit');
    await mockApiRequest();
    setCount((val) => val + 1);
    message.success('Submit finished');
  });

  return (
    <>
      <p>Submit count: {count}</p>
      <Button onClick={submit}>Submit</Button>
    </>
  );
};
