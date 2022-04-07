/**
 * title: 基础用法
 * desc: 设置 favicon
 */

import React, { useState } from 'react';
import { Button } from 'antd';
import { useFavicon } from '@pansy/react-hooks';

export const DEFAULT_FAVICON_URL = 'https://ahooks.js.org/simple-logo.svg';

export const GOOGLE_FAVICON_URL = 'https://www.google.com/favicon.ico';

export default () => {
  const [url, setUrl] = useState<string>(DEFAULT_FAVICON_URL);

  useFavicon(url);

  return (
    <>
      <p>
        Current Favicon: <span>{url}</span>
      </p>
      <Button
        style={{ marginRight: 16 }}
        onClick={() => {
          setUrl(GOOGLE_FAVICON_URL);
        }}
      >
        Change To Google Favicon
      </Button>
      <Button
        onClick={() => {
          setUrl(DEFAULT_FAVICON_URL);
        }}
      >
        Back To AHooks Favicon
      </Button>
    </>
  );
};
