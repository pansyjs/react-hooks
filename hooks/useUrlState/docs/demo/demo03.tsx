/**
 * title: 自定义 query-string 配置
 * desc: 可以通过传入 parseOptions 和 stringifyOptions 自定义转换规则。
 */
import React from 'react';
import { Button } from 'antd';
import { useUrlState } from '@pansy/use-url-state';

export default () => {
  const [state, setState] = useUrlState(
    { ids: ['1', '2', '3'] },
    {
      parseOptions: {
        arrayFormat: 'comma',
      },
      stringifyOptions: {
        arrayFormat: 'comma',
      },
    },
  );

  return (
    <>
      <Button
        onClick={() => {
          const arr = Array(3)
            .fill(1)
            .map(() => Math.floor(Math.random() * 10));
          setState({ ids: arr });
        }}
      >
        变更数组state
      </Button>
      <div>ids: {JSON.stringify(state.ids)}</div>
    </>
  );
};
