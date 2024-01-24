/**
 * title: 基本用法
 * desc: 使用 ref 设置需要全屏的元素
 */
import React, { useRef } from 'react';
import { Button } from 'antd';
import { useFullscreen } from '@pansy/use-fullscreen';

const Example: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(ref);

  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
      <div>
        <Button onClick={setFull}>setFull</Button>
        <Button onClick={exitFull} style={{ margin: '0 8px' }}>exitFull</Button>
        <Button onClick={toggleFull}>toggle</Button>
      </div>
    </div>
  );
};

export default Example;
