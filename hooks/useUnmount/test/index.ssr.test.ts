import { renderHook } from '@testing-library/react-hooks';
import { useUnmount } from '../src/index';

describe('useUnmount', () => {
  it('should be defined', () => {
    expect(useUnmount).toBeDefined();
  });
});
