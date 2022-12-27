import { useLayoutEffect } from 'react';
import { createDeepCompareEffect } from '@pansy/shared/react';

export const useDeepCompareLayoutEffect = createDeepCompareEffect(useLayoutEffect);
