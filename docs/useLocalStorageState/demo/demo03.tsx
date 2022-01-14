/**
 * title: 自定义序列化和反序列化函数
 * desc: 对于普通的字符串，可能你不需要默认的 `JSON.stringify/JSON.parse` 来序列化。
 */
import React from 'react';
import { Button, Space, Input } from 'antd';
import { useLocalStorageState } from '@pansy/react-hooks';

export default function () {
  const [message, setMessage] = useLocalStorageState('use-local-storage-state-demo3', {
    defaultValue: 'Hello~',
    serializer: (v) => v,
    deserializer: (v) => v,
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
