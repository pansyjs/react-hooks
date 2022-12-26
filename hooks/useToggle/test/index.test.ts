import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../src/index';

describe('useToggle', () => {
  it('should be defined', () => {
    expect(useToggle).toBeDefined();
  });

  it('default result', () => {
    const { result } = renderHook(() => useToggle());

    const [value, actions] = result.current;

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current.length).toBe(2);

    expect(typeof actions.toggle).toBe('function');
    expect(typeof actions.set).toBe('function')
    expect(typeof actions.setLeft).toBe('function')
    expect(typeof actions.setRight).toBe('function')

    expect(value).toBe(false);
  })

  it('default result with initialValue', () => {
    const { result } = renderHook(() => useToggle(true));

    const [value] = result.current;

    expect(value).toBe(true)
  })

  it('test on methods', async () => {
    // init
    const { result } = renderHook(() => useToggle());
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

    // setLeft
    act(() => {
      result.current[1].setLeft();
    });
    expect(result.current[0]).toBe(false)

    // setRight
    act(() => {
      result.current[1].setRight();
    });
    expect(result.current[0]).toBe(true)
  });

  it('test on optional', async () => {
    const { result } = renderHook(() => useToggle('Hello', 'World'));

    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe('World');

    act(() => {
      result.current[1].set('World');
    });
    expect(result.current[0]).toBe('World');

    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe('Hello');
  });
});
