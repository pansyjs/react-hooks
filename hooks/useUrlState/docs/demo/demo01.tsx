/**
 * title: 基础用法
 * desc: 将状态同步到 url query 中。通过设置值为 `undefind`, 可以从 url query 上彻底删除某个属性，从而使用默认值。
 */
import React from 'react';
import { Button } from 'antd';
import { useUrlState } from '@pansy/use-url-state';

export default () => {
  const [state, setState] = useUrlState({ count: '1' });

  return (
    <>
      <Button
        style={{ marginRight: 8 }}
        onClick={() => setState({ count: Number(state.count || 0) + 1 })}
      >
        add
      </Button>
      <Button onClick={() => setState({ count: undefined })}>
        clear
      </Button>
      <div>state: {state?.count}</div>
    </>
  );
};
