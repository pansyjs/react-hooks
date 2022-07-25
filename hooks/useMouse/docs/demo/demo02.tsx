import React, { useRef } from 'react';
import { useMouse } from '@pansy/react-hooks';

export default () => {
  const ref = useRef(null);
  const mouse = useMouse(ref.current);

  return (
    <>
      <div
        ref={ref}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'gray',
          color: 'white',
          lineHeight: '200px',
          textAlign: 'center',
        }}
      >
        element
      </div>
      <div>
        <p>
          Mouse In Element - x: {mouse.elementX}, y: {mouse.elementY}
        </p>
        <p>
          Element Position - x: {mouse.elementPosX}, y: {mouse.elementPosY}
        </p>
        <p>
          Element Dimensions - width: {mouse.elementW}, height: {mouse.elementH}
        </p>
      </div>
    </>
  );
};
