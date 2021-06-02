import { renderHook, act } from '@testing-library/react-hooks';
import { useModal } from '../index';

describe('useModal', () => {
  it('应已定义', () => {
    expect(useModal).toBeDefined();
  });
})
