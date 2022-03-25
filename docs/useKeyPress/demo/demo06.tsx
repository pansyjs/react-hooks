import React, { useState, useRef } from 'react';
import { Input } from 'antd';
import { useKeyPress } from '@pansy/react-hooks';

export default () => {
  const inputRef = useRef();

  const [text, setText] = useState('');
  const [textRef, setTextRef] = useState('');
  const [textSync, setTextSync] = useState('');
  useKeyPress(
    'enter',
    (event: any) => {
      const { value } = event.target;
      setText(value);
    },
    {
      events: ['keyup'],
      target: () => document.getElementById('input'),
    },
  );

  useKeyPress(
    'enter',
    (event: any) => {
      const { value } = event.target;
      setTextRef(value);
    },
    {
      target: inputRef,
    },
  );

  // Make sure the DOM exists
  useKeyPress(
    () => true,
    (event: any) => {
      const { value } = event.target;
      setTextSync(value);
    },
    {
      events: ['keyup'],
      target: document.getElementById('input2'),
    },
  );

  return (
    <div>
      <div>
        <p>Input and pressing enter: {text}</p>
        <Input id="input" style={{ width: 300, marginRight: 24 }} />
      </div>
      <div style={{ marginTop: 24 }}>
        <p>Input and pressing enter: {textRef}</p>
        <Input ref={inputRef} style={{ width: 300, marginRight: 24 }} />
      </div>
      <div style={{ marginTop: 24 }}>
        <p>Input after enter change: {textSync}</p>
        <Input id="input2" style={{ width: 300, marginRight: 24 }} />
      </div>
    </div>
  );
};
