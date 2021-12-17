import { renderHook } from '@testing-library/react-hooks';
import { useUnmount } from '../index';

describe('useUnmount', () => {
  it('should be defined', () => {
    expect(useUnmount).toBeDefined();
  });
});
