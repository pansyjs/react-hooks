import React from 'react';
import { useExternal } from '@pansy/react-hooks';

export default () => {
  const status = useExternal('/useExternal/test-external-script.js', {
    js: {
      async: true,
    },
  });

  return (
    <>
      <p>
        Status: <b>{status}</b>
      </p>
      <p>
        {/* @ts-ignore */}
        Response: <i>{status === 'ready' ? TEST_SCRIPT?.start() : '-'}</i>
      </p>
    </>
  );
};
