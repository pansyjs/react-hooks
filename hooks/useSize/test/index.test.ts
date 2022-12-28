import { renderHook } from '@testing-library/react';
import { useSize } from '../src/index';

describe('useSize', () => {
  it('should be defined', () => {
    expect(useSize).toBeDefined();
  });

  it('with argument', () => {
    const hook = renderHook(() => useSize(document.body));
    expect(hook.result.current).toEqual(undefined);
  });
});
