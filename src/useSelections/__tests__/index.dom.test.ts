import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { useSelections } from '../index';

const data = [1, 2, 3];

describe('useSelections', () => {
  it('should be defined', () => {
    expect(useSelections).toBeDefined();
  });
})
