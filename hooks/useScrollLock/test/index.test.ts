import { renderHook } from '@testing-library/react';
import { useScrollLock } from '../src';

describe('useScrollLock', () => {
  it('should be defined', () => {
    expect(useScrollLock).toBeDefined();
  });
})
