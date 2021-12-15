import { useState } from 'react';
import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { useMemoizedFn } from '../index';

const useCount = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const memoizedFn = useMemoizedFn(() => count);

  return { addCount, memoizedFn };
};

let hook: RenderHookResult<[], ReturnType<typeof useCount>>;

describe('useMemoizedFn', () => {
  it('should be defined', () => {
    expect(useMemoizedFn).toBeDefined();
  });

  it('useMemoizedFn should work', () => {
    act(() => {
      hook = renderHook(useCount);
    });

    const currentFn = hook.result.current.memoizedFn;
    expect(hook.result.current.memoizedFn()).toEqual(0);

    act(() => {
      hook.result.current.addCount();
    });

    expect(currentFn).toEqual(hook.result.current.memoizedFn);
    expect(hook.result.current.memoizedFn()).toEqual(1);
  })
});
