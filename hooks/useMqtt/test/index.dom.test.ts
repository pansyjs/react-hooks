import { renderHook } from '@testing-library/react-hooks';
import { useMqtt } from '../src/index';

describe('usePrevious', () => {
  it('should be defined', () => {
    expect(useMqtt).toBeDefined();
  });
})
