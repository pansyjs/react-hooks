/**
 * title: 基础用法
 * description: 设置页面标题
 */

import React from 'react';
import { useTitle } from '@pansy/react-hooks';

export default () => {
  useTitle('Page Title');

  return (
    <div>
      <p>Set title of the page.</p>
    </div>
  );
};
