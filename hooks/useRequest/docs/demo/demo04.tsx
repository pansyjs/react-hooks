/**
 * title: 轮询
 * desc: 通过设置 options.pollingInterval，进入轮询模式，useRequest 会定时触发 service 执行。
 */
import React from 'react';
import Mock from 'mockjs';
import { Button } from 'antd'
import { useRequest } from '@pansy/react-hooks';

function getUsername() {
  console.log('polling getUsername');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export default () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
  });

  return (
    <>
      <p>Username: {loading ? 'Loading' : data}</p>
      <Button onClick={run}>
        start
      </Button>
      <Button onClick={cancel} style={{ marginLeft: 16 }}>
        stop
      </Button>
    </>
  );
};
