/**
 * title: 基础用法
 */

import React, { useLayoutEffect, useState } from 'react';
import { Button } from 'antd';
import { useUpdateLayoutEffect } from '@pansy/react-hooks';

export default () => {
  const [count, setCount] = useState(0);
  const [layoutEffectCount, setLayoutEffectCount] = useState(0);
  const [updateLayoutEffectCount, setUpdateLayoutEffectCount] = useState(0);

  useLayoutEffect(() => {
    setLayoutEffectCount((c) => c + 1);
  }, [count]);

  useUpdateLayoutEffect(() => {
    setUpdateLayoutEffectCount((c) => c + 1);
    return () => {
      // do something
    };
  }, [count]); // you can include deps array if necessary

  return (
    <div>
      <p>layoutEffectCount: {layoutEffectCount}</p>
      <p>updateLayoutEffectCount: {updateLayoutEffectCount}</p>
      <p>
        <Button onClick={() => setCount((c) => c + 1)}>
          reRender
        </Button>
      </p>
    </div>
  );
};
