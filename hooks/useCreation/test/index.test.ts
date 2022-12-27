import { renderHook, act } from '@testing-library/react';
import { useState } from 'react';
import { useCreation } from '../src/index';

class Foo {
  constructor() {
    this.data = Math.random();
  }

  data: number;
}

const setUp = (): any =>
  renderHook(() => {
    const [count, setCount] = useState(0);
    const [, setFlag] = useState({});
    const foo = useCreation(() => new Foo(), [count]);

    return {
      foo,
      setCount,
      count,
      setFlag,
    };
  });

describe('useCreation', () => {
  it('should be defined', () => {
    expect(useCreation).toBeDefined();
  });

  it('should work', () => {
    const hook = setUp();
    const { foo } = hook.result.current;
    act(() => {
      hook.result.current.setFlag({});
    });
    expect(hook.result.current.foo).toBe(foo);
    act(() => {
      hook.result.current.setCount(1);
    });
    expect(hook.result.current.foo).not.toBe(foo);
  });
})
