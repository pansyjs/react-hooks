import { renderHook, act } from '@testing-library/react';
import { useUpdate } from '../src/index';

describe('useUpdate', () => {
  it('should be defined', () => {
    expect(useUpdate).toBeDefined();
  });

  it('should update', () => {
    let count = 0;

    const hooks = renderHook(() => {
      const update = useUpdate();

      return {
        update,
        count,
        onChange:() => {
          count++;
          update();
        },
      };
    });

    expect(hooks.result.current.count).toEqual(0);
    act(hooks.result.current.onChange);
    expect(hooks.result.current.count).toEqual(1);
  });

  it('should return same update function', () => {
    const hooks = renderHook(() => useUpdate());
    const preUpdate = hooks.result.current;
    hooks.rerender();
    expect(hooks.result.current).toEqual(preUpdate);
  });
});
