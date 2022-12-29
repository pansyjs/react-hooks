/**
 * title: 手动触发
 * description:
 *  如果设置了 options.manual = true，则 useRequest 不会默认执行，需要通过 run 来触发执行
 */
import React, { useState } from 'react';
import { Input, Button, Space, message, } from 'antd';
import { useRequest } from '@pansy/react-hooks';

function changeUsername(username: string): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export default () => {
  const [state, setState] = useState('');

  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState('');
        message.success(`The username was changed to "${params[0]}" !`);
      }
    },
  });

  return (
    <Space>
      <Input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240 }}
      />
      <Button disabled={loading} loading={loading} onClick={() => run(state)}>
        Edit
      </Button>
    </Space>
  );
};
