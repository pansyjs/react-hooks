import { renderHook, act } from '@testing-library/react-hooks';
import { useBoolean } from '../index';

describe('useToggle', () => {
  it('应已定义', () => {
    expect(useBoolean).toBeDefined();
  });

  it('默认初始值应为false', async () => {
    const hook = renderHook(() => useBoolean());
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('设置默认初始值为true', async () => {
    const hook = renderHook(() => useBoolean(true));
    expect(hook.result.current[0]).toEqual(true);
  });

  it('actions - 使用默认初始值', async () => {
    // init
    const hook = renderHook(() => useBoolean());
    expect(hook.result.current[0]).toEqual(false);

    // toggle
    act(() => {
      hook.result.current[1].toggle();
    });
    expect(hook.result.current[0]).toEqual(true);

    // setTrue
    act(() => {
      hook.result.current[1].setTrue();
    });
    expect(hook.result.current[0]).toEqual(true);

    // setFalse
    act(() => {
      hook.result.current[1].setFalse();
    });
    expect(hook.result.current[0]).toEqual(false);
  });
})
