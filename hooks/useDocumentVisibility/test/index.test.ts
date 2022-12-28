import { renderHook, act } from '@testing-library/react';
import { useDocumentVisibility } from '../src';

const mockIsBrowser = jest.fn();
const mockDocumentVisibilityState = jest.spyOn(document, 'visibilityState', 'get');

jest.mock('@pansy/shared', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@pansy/shared'),
    get isBrowser() {
      return mockIsBrowser();
    },
  }
});

afterAll(() => {
  jest.clearAllMocks();
});

describe('useDocumentVisibility', () => {
  it('isBrowser effect corrent', async () => {
    mockDocumentVisibilityState.mockReturnValue('hidden');
    mockIsBrowser.mockReturnValue(false);
    const { result } = renderHook(() => useDocumentVisibility());
    expect(result.current).toEqual('visible');
  });

  it('visibilitychange update correct ', async () => {
    mockDocumentVisibilityState.mockReturnValue('hidden');
    mockIsBrowser.mockReturnValue(true);
    const { result } = renderHook(() => useDocumentVisibility());
    expect(result.current).toEqual('hidden');
    mockDocumentVisibilityState.mockReturnValue('visible');

    act(() => {
      document.dispatchEvent(new Event('visibilitychange'));
    });
    expect(result.current).toEqual('visible');
  });
});
