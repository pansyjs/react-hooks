import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from '../src/index';

describe('useToggle', () => {
  it('应已定义', () => {
    expect(useToggle).toBeDefined();
  });

  it('默认初始值应为false', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('actions - 使用默认', async () => {
    // init
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toEqual(false);

    // toggle
    act(() => {
      hook.result.current[1].toggle();
    });
    expect(hook.result.current[0]).toEqual(true);

    // setLeft
    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toEqual(false);

    // setRight
    act(() => {
      hook.result.current[1].setRight();
    });
    expect(hook.result.current[0]).toEqual(true);
  });

  it('actions - 传入默认状态值', async () => {
    // init
    const hook = renderHook(() => useToggle('Hello'));
    expect(hook.result.current[0]).toEqual('Hello');

    // toggle
    act(() => {
      hook.result.current[1].toggle();
    });
    expect(hook.result.current[0]).toEqual(false);

    // setLeft
    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toEqual('Hello');

    // setRight
    act(() => {
      hook.result.current[1].setRight();
    });
    expect(hook.result.current[0]).toEqual(false);
  });

  it('actions - 传入默认状态值和取反状态值', async () => {
    // init
    const hook = renderHook(() => useToggle('Hello', 'World'));
    expect(hook.result.current[0]).toEqual('Hello');

    // toggle
    act(() => {
      hook.result.current[1].toggle();
    });
    expect(hook.result.current[0]).toEqual('World');

    // setLeft
    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toEqual('Hello');

    // setRight
    act(() => {
      hook.result.current[1].setRight();
    });
    expect(hook.result.current[0]).toEqual('World');
  });
});
