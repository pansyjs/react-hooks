import { renderHook } from '@testing-library/react-hooks';
import { useInterval } from '../src/index';

interface ParamsObj {
  fn: (...arg: any) => any;
  delay?: number;
  options?: { immediate: boolean };
}

const setUp = ({ fn, delay, options }: ParamsObj) =>
  renderHook(() => useInterval(fn, delay, options));

describe('useInterval', () => {
  jest.useFakeTimers();

  it('should be defined', () => {
    expect(useInterval).toBeDefined();
  });

  it('interval should work', () => {
    const callback = jest.fn();

    setUp({ fn: callback, delay: 20, });

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(70);
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it('delay is undefined should stop', () => {
    let delay: number | undefined;

    const callback = jest.fn();
    setUp({ fn: callback, delay });

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(50);
    expect(callback).not.toBeCalled();
  });

  it('immediate in options should work', () => {
    const callback = jest.fn();

    setUp({
      fn: callback,
      delay: 20,
      options: { immediate: true }
    });

    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(70);
    expect(callback).toHaveBeenCalledTimes(4);
  });
})
