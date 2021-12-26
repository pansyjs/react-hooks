/* eslint-disable max-nested-callbacks */
import { renderHook } from '@testing-library/react-hooks';
import { useClickAway } from '../index';

import type { BasicTarget } from '../../utils/domTarget';

describe('useClickAway', () => {
  it('should be defined', () => {
    expect(useClickAway).toBeDefined();
  });
});
