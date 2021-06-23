import { renderHook, act } from '@testing-library/react-hooks';
import { useModal } from '../index';

describe('useModal', () => {
  it('should be defined', () => {
    expect(useModal).toBeDefined();
  });
});
