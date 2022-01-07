import { renderHook } from '@testing-library/react-hooks';
import { useUnmount } from '../src/index';

describe('useUnmount', () => {
  it('should be defined', () => {
    expect(useUnmount).toBeDefined();
  });

  it('useUnmount should work', async () => {
    const fn = jest.fn();

    const hook = renderHook(() => { useUnmount(fn); });

    expect(fn).toBeCalledTimes(0);
    hook.rerender();
    expect(fn).toBeCalledTimes(0);
    hook.rerender();
    expect(fn).toBeCalledTimes(1);
  });
});
