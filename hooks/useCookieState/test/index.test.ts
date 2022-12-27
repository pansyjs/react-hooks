import { renderHook, act } from '@testing-library/react';
import Cookies from 'js-cookie';
import { useCookieState } from '../src/index';

import type { Options } from '../src/index';

const setUp = (key: string, options: Options) =>
  renderHook(() => {
    const [state, setState] = useCookieState(key, options);
    return {
      state,
      setState,
    } as const;
  });

describe('useCookieState', () => {
  it('should be defined', () => {
    expect(useCookieState).toBeDefined();
  });

  it('getKey should work', () => {
    const COOKIE_KEY = 'test-key';
    const hook = setUp(COOKIE_KEY, {
      defaultValue: 'A',
    });

    expect(hook.result.current.state).toEqual('A');

    act(() => {
      hook.result.current.setState('B');
    });
    expect(hook.result.current.state).toEqual('B');

    const anotherHook = setUp(COOKIE_KEY, {
      defaultValue: 'A',
    });
    expect(anotherHook.result.current.state).toEqual('B');
    act(() => {
      anotherHook.result.current.setState('C');
    });
    expect(anotherHook.result.current.state).toEqual('C');
    expect(hook.result.current.state).toEqual('B');
  })

  it('should support undefined', () => {
    const COOKIE_KEY = 'test-boolean-key-with-undefined';

    const hook = setUp(COOKIE_KEY, {
      defaultValue: 'undefined',
    });
    expect(hook.result.current.state).toEqual('undefined');

    act(() => {
      hook.result.current.setState(undefined);
    });
    expect(hook.result.current.state).toEqual(undefined);
    const anotherHook = setUp(COOKIE_KEY, {
      defaultValue: 'false',
    });
    expect(anotherHook.result.current.state).toEqual('false');
  })

  it('should support empty string', () => {
    const COOKIE_KEY = 'test-key-empty-string';

    Cookies.set(COOKIE_KEY, '');
    expect(Cookies.get(COOKIE_KEY)).toBe('');

    const hook = setUp(COOKIE_KEY, {
      defaultValue: 'hello',
    });
    expect(hook.result.current.state).toEqual('');
  });

  it('should support function updater', () => {
    const COOKIE_KEY = 'test-func-updater';
    const hook = setUp(COOKIE_KEY, {
      defaultValue: () => 'hello world',
    });
    expect(hook.result.current.state).toEqual('hello world');
    act(() => {
      hook.result.current.setState((state) => `${state}, zhangsan`);
    });
    expect(hook.result.current.state).toEqual('hello world, zhangsan');
  });
})
