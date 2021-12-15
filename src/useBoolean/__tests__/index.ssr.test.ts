import { renderHook } from '@testing-library/react-hooks/server';
import { useBoolean } from '../index';

describe('useBoolean', () => {
  it('should be defined', () => {
    expect(useBoolean).toBeDefined();
  });

  it('should render', () => {
    const { result } = renderHook(() => useBoolean());
    expect(result.error).toBeUndefined();
  });
})
