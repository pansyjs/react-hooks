/**
 * title: 将 state 存储在 localStorage 中
 * description: 刷新页面后，可以看到输入框中的内容被从 localStorage 中恢复了。
 */
import React from 'react';
import { Button, Space, Input } from 'antd';
import { useLocalStorageState } from '@pansy/react-hooks';

export default function () {
  const [message, setMessage] = useLocalStorageState('use-local-storage-state-demo1', {
    defaultValue: 'Hello~',
  });

  return (
    <Space>
      <Input
        value={message || ''}
        placeholder="Please enter some words..."
        style={{
          width: 240
        }}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={() => setMessage('Hello~')}>
        Reset
      </Button>
      <Button onClick={() => setMessage()}>
        Clear
      </Button>
    </Space>
  );
}
