import { useDeepCompareEffect } from '@pansy/use-deep-compare-effect';
import { Button } from 'antd'
import React, { useEffect, useState, useRef } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const effectCountRef = useRef(0);
  const deepCompareCountRef = useRef(0);

  useEffect(() => {
    effectCountRef.current += 1;
  }, [{}]);

  useDeepCompareEffect(() => {
    deepCompareCountRef.current += 1;
    return () => {
      // do something
    };
  }, [{}]);

  return (
    <div>
      <p>effectCount: {effectCountRef.current}</p>
      <p>deepCompareCount: {deepCompareCountRef.current}</p>
      <p>
        <Button onClick={() => setCount((c) => c + 1)}>
          reRender
        </Button>
      </p>
    </div>
  );
};
