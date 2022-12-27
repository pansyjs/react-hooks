import { renderHook } from '@testing-library/react';
import { useUnmount } from '../src/index';

describe('useUnmount', () => {
  it('should be defined', () => {
    expect(useUnmount).toBeDefined();
  });

  it('useUnmount should work', async () => {
    const fn = jest.fn();
    const { rerender, unmount } = renderHook(() => useUnmount(fn));

    expect(fn).toBeCalledTimes(0);

    rerender();
    expect(fn).toBeCalledTimes(0);

    unmount();
    expect(fn).toBeCalledTimes(1);
  });
});
