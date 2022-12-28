import { act, renderHook, waitFor } from '@testing-library/react';
import { useRequest } from '../src/index';
import { request } from '../../../tests/helpers';

describe('useLoadingDelayPlugin', () => {
  jest.useFakeTimers();

  const setUp = (service, options) => renderHook((o) => useRequest(service, o || options));

  let hook;
  it('useLoadingDelayPlugin should work', async () => {
    act(() => {
      hook = setUp(request, {
        loadingDelay: 2000,
      });
    });
    expect(hook.result.current.loading).toEqual(false);

    act(() => {
      jest.runAllTimers();
    });
    await waitFor(() => expect(hook.result.current.loading).toEqual(false));

    act(() => {
      hook = setUp(request, {
        loadingDelay: 500,
      });
    });
    expect(hook.result.current.loading).toEqual(false);

    act(() => {
      jest.advanceTimersByTime(501);
    });
    expect(hook.result.current.loading).toEqual(true);

    act(() => {
      jest.runAllTimers();
    });
    await waitFor(() => expect(hook.result.current.loading).toEqual(false));
    expect(hook.result.current.loading).toEqual(false);
  });
});
