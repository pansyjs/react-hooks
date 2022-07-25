/**
 * title: 基础用法
 */
 import React, { useEffect, useState } from 'react';
 import { Button } from 'antd'
 import { useUpdateEffect } from '@pansy/react-hooks';

 export default () => {
   const [count, setCount] = useState(0);
   const [effectCount, setEffectCount] = useState(0);
   const [updateEffectCount, setUpdateEffectCount] = useState(0);

   useEffect(() => {
     setEffectCount((c) => c + 1);
   }, [count]);

   useUpdateEffect(() => {
     setUpdateEffectCount((c) => c + 1);
   }, [count]);

   return (
     <div>
       <p>effectCount: {effectCount}</p>
       <p>updateEffectCount: {updateEffectCount}</p>
       <p>
         <Button onClick={() => setCount((c) => c + 1)}>
           reRender
         </Button>
       </p>
     </div>
   );
 };
