import React from 'react';
import { Input } from 'antd';
import { useCookieState } from '@pansy/react-hooks';

export default () => {
  const [message, setMessage] = useCookieState('useCookieStateString');

  return (
    <Input
      value={message}
      placeholder="Please enter some words..."
      onChange={(e) => setMessage(e.target.value)}
      style={{ width: 300 }}
    />
  );
};
