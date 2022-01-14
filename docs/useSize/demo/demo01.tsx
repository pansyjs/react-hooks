/**
 * title: 基础用法
 * desc: useSize 可以接收 ref 参数
 */

 import React, { useRef } from 'react';
 import { useSize } from '@pansy/react-hooks';

 export default () => {
   const ref = useRef(null);
   const size = useSize(ref);
   return (
     <div ref={ref}>
       <p>Try to resize the preview window </p>
       <p>
         width: {size?.width}px, height: {size?.height}px
       </p>
     </div>
   );
 };
