import { renderHook, act } from '@testing-library/react';
import { useRafState } from '../src/index';

describe('useRafState', () => {
  it('should be defined', () => {
    expect(useRafState).toBeDefined();
  });

  it('should work', () => {
    const { result } = renderHook(() => useRafState(0));
    const [rafState, setRafState] = result.current;
    expect(rafState).toBe(0);

    act(() => {
      setRafState(1);
      expect(rafState).toBe(0);
      // eslint-disable-next-line max-nested-callbacks
      requestAnimationFrame(() => {
        expect(rafState).toBe(1);
      });
    });
  });
});
