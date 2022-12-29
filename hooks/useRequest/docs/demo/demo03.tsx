/**
 * title: Loading Delay
 * description: 通过设置 options.loadingDelay ，可以延迟 loading 变成 true 的时间，有效防止闪烁。
 */
import React from 'react';
import Mock from 'mockjs';
import { Button } from 'antd';
import { useRequest } from '@pansy/react-hooks';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 200);
  });
}

export default () => {
  const action = useRequest(getUsername);

  const withLoadingDelayAction = useRequest(getUsername, {
    loadingDelay: 300,
  });

  const trigger = () => {
    action.run();
    withLoadingDelayAction.run();
  };

  return (
    <div>
      <Button onClick={trigger}>
        run
      </Button>

      <div style={{ margin: '24px 0', width: 300 }}>
        Username: {action.loading ? 'Loading...' : action.data}
      </div>
      <div>
        Username: {withLoadingDelayAction.loading ? 'Loading...' : withLoadingDelayAction.data}
      </div>
    </div>
  );
};
