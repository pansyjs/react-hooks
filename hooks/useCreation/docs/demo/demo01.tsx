import React, { useState } from 'react';
import { Button } from 'antd';
import { useCreation } from '@pansy/react-hooks';

class Foo {
  constructor() {
    this.data = Math.random();
  }

  data: number;
}

export default function () {
  const foo = useCreation(() => new Foo(), []);
  const [, setFlag] = useState({});
  return (
    <>
      <p>{foo.data}</p>
      <Button
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </Button>
    </>
  );
}
