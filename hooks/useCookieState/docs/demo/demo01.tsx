import React from 'react';
import { Input } from 'antd';
import { useCookieState } from '@pansy/react-hooks';

function getRootHost() {
  const items = window.location.hostname.split('.');
  if (items.length <= 1) {
    return items.join('.');
  }
  return '.' + items.slice(items.length - 1, items.length).join('.');
}

const rootHost = getRootHost();

console.log(rootHost);

export default () => {
  const [message, setMessage] = useCookieState('useCookieStateString', {
    domain: rootHost,
  });

  return (
    <Input
      value={message}
      placeholder="Please enter some words..."
      onChange={(e) => setMessage(e.target.value)}
      style={{ width: 300 }}
    />
  );
};
