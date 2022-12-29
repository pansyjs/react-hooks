/**
 * title: 监测整页的滚动
 * description: 尝试滚动一下页面。
 */

 import React from 'react';
 import { useScroll } from '@pansy/react-hooks';

 export default () => {
   const scroll = useScroll(document);
   return (
     <div>
       <div>{JSON.stringify(scroll)}</div>
     </div>
   );
 };
