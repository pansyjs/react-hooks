import { renderHook } from '@testing-library/react';
import { useScroll } from '../src/index';

describe('useScroll', () => {
  it('should be defined', () => {
    expect(useScroll).toBeDefined();
  });

  it('document body', () => {
    const hook = renderHook(() => useScroll(document));
    expect(hook.result.current).toEqual(undefined);
  });
});
