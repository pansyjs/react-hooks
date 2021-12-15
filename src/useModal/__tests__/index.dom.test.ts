import { renderHook, act } from '@testing-library/react-hooks';
import { useModal } from '../index';

const setUp = <T>() => renderHook(() => useModal<T>());

describe('useModal', () => {
  it('should be defined', () => {
    expect(useModal).toBeDefined();
  });

  it('should default state', () => {
    const { result } = setUp();

    expect(result.current.visible).toBe(false);
    expect(result.current.data).toBe(undefined);
    expect(typeof result.current.open).toBe('function');
    expect(typeof result.current.close).toBe('function');
  });

  it('should work open() and close()', () => {
    const { result } = setUp();

    expect(result.current.visible).toBe(false);

    act(() => {
      result.current.open();
    });

    expect(result.current.visible).toBe(true);

    act(() => {
      result.current.close();
    });

    expect(result.current.visible).toBe(false);
  });

  it('should work open() with data', () => {
    const { result } = setUp<string>();

    expect(result.current.visible).toBe(false);

    act(() => {
      result.current.open('Tom');
    });

    expect(result.current.visible).toBe(true);
    expect(result.current.data).toEqual('Tom');

    act(() => {
      result.current.close();
    });

    expect(result.current.visible).toBe(false);
    expect(result.current.data).toEqual(undefined);
  })
})
