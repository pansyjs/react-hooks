/**
 * title: 存储数组或对象等复杂类型
 * desc: useLocalStorageState 会自动处理序列化和反序列化的操作。
 */
import React from 'react';
import { Button, Space, Input } from 'antd';
import { useLocalStorageState } from '@pansy/react-hooks';

const defaultArray = ['a', 'e', 'i', 'o', 'u'];

export default function () {
  const [value, setValue] = useLocalStorageState('use-local-storage-state-demo2', {
    defaultValue: defaultArray,
  });

  return (
    <>
      <p>{value.join('-')}</p>
      <Space>
        <Button
          onClick={() => setValue([...value, Math.random().toString(36).slice(-1)])}
        >
          push random
        </Button>
        <Button onClick={() => setValue(defaultArray)}>
          reset
        </Button>
      </Space>
    </>
  );
}
