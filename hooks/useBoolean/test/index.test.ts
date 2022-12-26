import { renderHook, act } from '@testing-library/react';
import { useBoolean } from '../src/index';

describe('useBoolean', () => {
  it('should be defined', () => {
    expect(useBoolean).toBeDefined();
  });

  it('default result', () => {
    const { result } = renderHook(() => useBoolean());
    const [value, actions] = result.current;

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current.length).toBe(2);

    expect(typeof actions.toggle).toBe('function');
    expect(typeof actions.set).toBe('function')
    expect(typeof actions.setTrue).toBe('function')
    expect(typeof actions.setFalse).toBe('function')

    expect(value).toBe(false);
  })

  it('default result with initialValue', () => {
    const { result } = renderHook(() => useBoolean(true));

    const [value] = result.current;

    expect(value).toBe(true)
  })

  it('test on methods', async () => {
    // init
    const { result } = renderHook(() => useBoolean());
    expect(result.current[0]).toBe(false)

    // toggle
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(true)

    // set
    act(() => {
      result.current[1].set(true);
    });
    expect(result.current[0]).toBe(true)

    // setFalse
    act(() => {
      result.current[1].setFalse();
    });
    expect(result.current[0]).toBe(false)

    // setTrue
    act(() => {
      result.current[1].setTrue();
    });
    expect(result.current[0]).toBe(true)
  });
})
